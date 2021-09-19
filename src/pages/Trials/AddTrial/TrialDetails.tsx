import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Theme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "../../../styles/material-ui";
import stateList from "../../../assets/stateList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 10vw",
  },
  section: {
    padding: "30px 0 30px 0",
  },
  textField: {
    paddingTop: "20px",
    width: "100%",
  },
  select: {
    width: "22vw",
  },
}));

export default function TrialDetails() {
  const classes = useStyles();
  const [state, setState] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h5">Name trial</Typography>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            label="Name"
            color="primary"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
