import React from "react";
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

export default function SiteDetails({
  name,
  street,
  city,
  state,
  zip,
  handleSiteChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h5">Site Details</Typography>
        <div className={classes.textField}>
          <TextField
            inputProps={{ "data-testid": "nameInput" }}
            variant="outlined"
            label="Name"
            color="primary"
            fullWidth
            value={name}
            onChange={(e) => handleSiteChange("name", e.target.value)}
          />
        </div>
      </div>

      <div className={classes.section}>
        <Typography variant="h5">Address</Typography>
        <div className={classes.textField}>
          <TextField
            inputProps={{ "data-testid": "streetInput" }}
            variant="outlined"
            label="Street"
            color="primary"
            fullWidth
            value={street}
            onChange={(e) => handleSiteChange("street", e.target.value)}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            inputProps={{ "data-testid": "cityInput" }}
            variant="outlined"
            label="City"
            color="primary"
            fullWidth
            value={city}
            onChange={(e) => handleSiteChange("city", e.target.value)}
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
                    defaultValue=""
                    label="State"
                    className={classes.select}
                    value={state}
                    onChange={(e) => handleSiteChange("state", e.target.value)}
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
                  inputProps={{ "data-testid": "zipInput" }}
                  variant="outlined"
                  label="Zip code"
                  color="primary"
                  fullWidth
                  value={zip}
                  onChange={(e) => handleSiteChange("zip", e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
