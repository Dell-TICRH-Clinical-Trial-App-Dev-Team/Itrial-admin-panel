import React from "react";
import {
  Grid,
  Typography,
  KeyboardArrowRightIcon,
  Paper,
  makeStyles,
  Theme,
} from "../../../../styles/material-ui";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: "flex",
    width: "100%",
    padding: "10px 0",
    borderRadius: "6px",
    margin: "4px 0",
  },
  name: {
    marginLeft: "24px",
  },
  status: {
    display: "flex",
  },
}));

interface TrialCardDTO {
  name: string;
  startDate: string;
  endDate: string;
  patientsCompleted: string;
  status: string;
}

const InfoCard: React.FC<TrialCardDTO> = ({
  name,
  startDate,
  endDate,
  patientsCompleted,
  status,
}) => {
  const classes = useStyles();
  return (
    <Grid container data-testid="info-card">
      <Paper className={classes.paper}>
        <Grid item xs={4}>
          <Typography
            variant="h6"
            className={classes.name}
            data-testid="trial-name"
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="trial-start-date">
            {startDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="trial-completion-date">
            {endDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="trial-patients-completed">
            {patientsCompleted}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.status} data-testid="trial-status">
            <Typography variant="h6">{status}</Typography>
            <KeyboardArrowRightIcon />
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default InfoCard;
