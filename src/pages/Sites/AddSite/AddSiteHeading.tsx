import React from "react";
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "../../../styles/material-ui";
import AddCancelButtons from "./AddCancelButtons";

const useStyles = makeStyles((theme: Theme) => ({
  gridStyle: {
    paddingBottom: "40px",
    backgroundColor: "#FFFFFF",
  },
  heading: {
    height: "100px",
    padding: "20px 0 0 7.4vw",
  },
}));
export default function AddSiteHeading({ submitSite }) {
  const classes = useStyles();

  return (
    <div className={classes.gridStyle}>
      <Grid container>
        <Grid item xs={9}>
          <div className={classes.heading}>
            <Typography variant="h1">Add Site</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <AddCancelButtons submitSite={submitSite} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
