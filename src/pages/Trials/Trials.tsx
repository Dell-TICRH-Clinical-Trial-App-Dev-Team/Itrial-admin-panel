import React from "react";
import { Typography, makeStyles, Theme } from "../../styles/material-ui";
import PageHeading from "../../components/PageHeading";
import TrialTabs from "./TrialTabs";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: "64px",
    borderBottom: "1px solid black",
    backgroundColor: "white",
  },
}));

const Trials = () => {
  const classes = useStyles();

  return (
    <div>
      {/*FIXME: Add App Bar*/}
      <div className={classes.appBar}>App bar</div>

      <PageHeading headingName={"Trials"} />

      <TrialTabs />
    </div>
  );
};

export default Trials;
