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
  gridStyle: {
    paddingBottom: "40px",
    backgroundColor: "#FFFFFF",
  },
  heading: {
    height: "100px",
    padding: "20px 0 0 7.4vw",
  },
}));

export default function AddSitesLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gridStyle}>
        <Grid container>
          <Grid item xs={9}>
            <div className={classes.heading}>
              <Typography variant="h1">Add Site</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <AddCancelButtons />
            </div>
          </Grid>
        </Grid>
      </div>

      <SiteDetails />
      <TeamMemberDetails />
    </div>
  );
}
