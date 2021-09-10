import React from "react";
import { Typography, makeStyles, Theme } from "../../styles/material-ui";
import TrialTabs from "./TrialTabs";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: "64px",
    borderBottom: "1px solid black",
    backgroundColor: "white",
  },
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
      {/*FIXME: Add App Bar*/}
      <div className={classes.appBar}>App bar</div>

      <div className={classes.heading}>
        <Typography variant="h1">Trials</Typography>
      </div>
      <TrialTabs />
    </div>
  );
};

export default Trials;
