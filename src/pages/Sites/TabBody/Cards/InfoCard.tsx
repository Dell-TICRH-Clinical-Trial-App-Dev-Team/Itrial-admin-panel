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
  activeTrials: {
    display: "flex",
  },
}));

interface SiteCardDTO {
  name: string;
  siteId: string;
  address: string;
  members: number;
  activeTrials: number;
}

const InfoCard: React.FC<SiteCardDTO> = ({
  name,
  siteId,
  address,
  members,
  activeTrials,
}) => {
  const classes = useStyles();
  return (
    <Grid container data-testid="info-card">
      <Paper className={classes.paper}>
        <Grid item xs={4}>
          <Typography
            variant="h6"
            className={classes.name}
            data-testid="site-name"
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="site-id">
            {siteId}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="site-location">
            {address}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" data-testid="site-members">
            {members}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.activeTrials}>
            <Typography variant="h6" data-testid="site-active-trials">
              {activeTrials}
            </Typography>
            <KeyboardArrowRightIcon />
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default InfoCard;
