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
import stateList from "./data/stateList";

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

export default function SiteDetails() {
  const classes = useStyles();
  const [state, setState] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h5">Site Details</Typography>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            label="Name"
            color="primary"
            fullWidth
          />
        </div>
      </div>

      <div className={classes.section}>
        <Typography variant="h5">Address</Typography>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            label="Street"
            color="primary"
            fullWidth
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            label="City"
            color="primary"
            fullWidth
          />
          <div className={classes.textField}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={state}
                    onChange={handleStateChange}
                    label="State"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {stateList.map((state, index) => (
                      <MenuItem value={state} key={index}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Zip code"
                  color="primary"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
