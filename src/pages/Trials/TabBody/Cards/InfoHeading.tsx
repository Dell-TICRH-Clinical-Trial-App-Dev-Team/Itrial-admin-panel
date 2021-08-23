import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

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
      <Grid item  xs={2}>
        <Typography variant="subtitle1">Patients Completed</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Status</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoHeading;
