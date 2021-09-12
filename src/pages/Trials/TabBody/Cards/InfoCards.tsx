import React from "react";
import { makeStyles, Theme } from "../../../../styles/material-ui";
import InfoCard from "./InfoCard";
import { Trial } from "../../../../api/models";

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
      if (statusShow === 1) return trial.status === "active";
      else if (statusShow === 2) return trial.status === "pending";
      else if (statusShow === 3) return trial.status === "ended";
      return false;
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
