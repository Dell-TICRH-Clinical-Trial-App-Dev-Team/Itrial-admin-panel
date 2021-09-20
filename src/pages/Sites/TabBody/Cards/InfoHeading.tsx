import React from "react";
import { Grid, Typography } from "../../../../styles/material-ui";

const InfoHeading = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Site name</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Site ID</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Location</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Members</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Active Trials</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoHeading;
