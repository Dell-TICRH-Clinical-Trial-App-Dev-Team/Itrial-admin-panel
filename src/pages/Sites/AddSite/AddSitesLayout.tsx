import React, { useState } from "react";
import {
  Theme,
  Typography,
  makeStyles,
  Grid,
  Paper,
} from "../../../styles/material-ui";
import SiteDetails from "./SiteDetails";
import TeamMemberDetails from "./TeamMemberDetails";
import AddCancelButtons from "./AddCancelButtons";
import AddSiteHeading from "./AddSiteHeading";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#F2F2F2",
    marginBottom: "100px",
  },
  paperContainer: {
    margin: "40px 15vw",
  },
}));

export default function AddSitesLayout() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [teammember, setTeammember] = useState<string[]>([]);

  const handleSiteChange = (label, newVal) => {
    switch (label) {
      case "name":
        setName(newVal);
        break;
      case "street":
        setStreet(newVal);
        break;
      case "city":
        setCity(newVal);
        break;
      case "state":
        setState(newVal);
        break;
      case "zip":
        setZip(newVal);
        break;
      case "teammember":
        setTeammember(newVal);
        break;
    }
  };

  const submitSite = () => {
    console.log(name, street, city, state, zip, teammember);
  };

  return (
    <div className={classes.root}>
      <AddSiteHeading submitSite={submitSite} />
      <div className={classes.paperContainer}>
        <Paper elevation={3}>
          <SiteDetails
            name={name}
            street={street}
            city={city}
            state={state}
            zip={zip}
            handleSiteChange={handleSiteChange}
          />
        </Paper>
      </div>

      <div className={classes.paperContainer}>
        <Paper elevation={3}>
          <TeamMemberDetails
            teammember={teammember}
            handleSiteChange={handleSiteChange}
          />
        </Paper>
      </div>
    </div>
  );
}
