import React from "react";
import SiteTabs from "./SiteTabs";

import { Typography, makeStyles, Theme } from "../../styles/material-ui";

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

const Sites = () => {
  const classes = useStyles();
  return (
    <div>
      {/*FIXME: Add App Bar*/}
      <div className={classes.appBar}>App bar</div>

      <div className={classes.heading}>
        <Typography variant="h1">Sites</Typography>
      </div>
      <SiteTabs />
    </div>
  );
};

export default Sites;
