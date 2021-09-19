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

export default function SiteDetails({
  name,
  street,
  city,
  state,
  zip,
  handleSiteChange,
}) {
  const classes = useStyles();

  const handleNameChange = (e) => handleSiteChange("name", e.target.value);
  const handleStreetChange = (e) => handleSiteChange("street", e.target.value);
  const handleCityChange = (e) => handleSiteChange("city", e.target.value);
  const handleStateChange = (e) => handleSiteChange("state", e.target.value);
  const handleZipChange = (e) => handleSiteChange("zip", e.target.value);

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
            onChange={handleNameChange}
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
            onChange={handleStreetChange}
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
            onChange={handleCityChange}
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
                    onChange={handleStateChange}
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
                  onChange={handleZipChange}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
