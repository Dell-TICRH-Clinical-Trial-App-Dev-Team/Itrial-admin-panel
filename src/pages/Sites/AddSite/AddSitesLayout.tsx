import React from "react";
import {
  Theme,
  Typography,
  makeStyles,
  Grid,
} from "../../../styles/material-ui";
import SiteDetails from "./SiteDetails";
import TeamMemberDetails from "./TeamMemberDetails";
import AddCancelButtons from "./AddCancelButtons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#F2F2F2",
  },
  heading: {
    height: "100px",
    backgroundColor: "#FFFFFF",
    padding: "20px 0 0 7.4vw",
    border: "1px solid black",
  },
}));

export default function AddSitesLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={9}>
          <div className={classes.heading}>
            <Typography variant="h1">Add Site</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ border: "1px solid black" }}>
            <AddCancelButtons />
          </div>
        </Grid>
      </Grid>

      <SiteDetails />
      <TeamMemberDetails />
    </div>
  );
}
