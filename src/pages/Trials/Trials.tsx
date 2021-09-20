import React from "react";
import TrialTabs from "./TrialTabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    height: "100px",
    backgroundColor: "white",
    padding: "20px 0 0 7.4vw",
  },
}));

const Trials = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heading}>
        <Typography variant="h1">Trials</Typography>
      </div>
      <TrialTabs />
    </div>
  );
};

export default Trials;
