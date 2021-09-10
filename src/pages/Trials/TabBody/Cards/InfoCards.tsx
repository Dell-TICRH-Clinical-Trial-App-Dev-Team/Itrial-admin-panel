import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Trial } from "../../../../api/models";
import InfoCard from "./InfoCard";

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    margin: "0 7.4vw",
  },
}));

interface props {
  trials: Trial[];
  statusShow: number;
}

// Maps through each data entry and returns data in <InfoCard />
const InfoCards: React.FC<props> = ({ trials, statusShow }) => {
  // filter according to status type
  if (statusShow !== 0) {
    trials = trials.filter((trial: Trial) => {
      if (statusShow == 1) return trial.status == "active";
      if (statusShow == 2) return trial.status == "pending";
      if (statusShow == 3) return trial.status == "ended";
    });
  }
  const classes = useStyles();
  return (
    <div className={classes.body}>
      {trials.map((trial: Trial) => (
        <InfoCard
          name={trial.name}
          startDate={trial.startDate ? trial.startDate : "--/--/--"}
          endDate={trial.endDate ? trial.endDate : "--/--/--"}
          patientsCompleted={"18/100"} // this will be replaced with an API call
          status={trial.status}
          key={trial.id}
        />
      ))}
    </div>
  );
};

export default InfoCards;
