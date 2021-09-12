import React from "react";
import { Grid, Typography } from "../../../../styles/material-ui";

const InfoHeading = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Trial name</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Start date</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Completion data</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Patients Completed</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Status</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoHeading;
