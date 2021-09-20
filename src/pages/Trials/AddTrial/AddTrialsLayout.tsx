import React, { useState } from "react";
import {
  Theme,
  Typography,
  makeStyles,
  Grid,
  Paper,
  Delete,
  IconButton,
} from "../../../styles/material-ui";
import TrialDetails from "./TrialDetails";
import SiteDetails from "./SiteDetails";
import AddTrialProgressButtons from "./AddTrialProgressButtons";
import FooterButton from "../../../components/FooterButton";
import { Group, Site, TeamMember, TrialProtocol } from "../../../api/models";
import GroupDetails from "./GroupDetails";
import TrialProtocolDetails from "./TrialProtocolDetails";
import ConsentFormDetails from "./ConsentFormDetails";

import dummySiteData from "../../Sites/dummySiteData";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#F2F2F2",
    marginBottom: "100px",
  },
  gridStyle: {
    paddingBottom: "40px",
    backgroundColor: "#FFFFFF",
  },
  heading: {
    height: "100px",
    padding: "20px 0 0 7.4vw",
  },
  subheading: {
    height: "50px",
    padding: "20px 0 0 7.4vw",
  },
  paperContainer: {
    margin: "40px 15vw",
  },
}));

export default function AddTrialsLayout() {
  const classes = useStyles();

  const [step, setStep] = useState(1);

  const stepDescriptions = [
    "Step 1/3 - Name your trial & add sites",
    "Step 2/3 - Add groups",
    "Step 3/3 - Attach trial protocol and consent form",
  ];

  const [name, setName] = useState("");
  const [sites, setSites] = useState<Site[]>([
    {
      name: "",
      address: "",
      trials: [],
      teamMembers: [],
      cccs: [],
      id: 1,
    },
  ]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [trialProtocol, setTrialProtocol] = useState<string>("");
  const [consentForm, setConsentForm] = useState<string>("");

  const handleTrialChange = (field, newVal) => {
    switch (field) {
      case "name":
        setName(newVal);
        break;
      case "sites":
        setSites(newVal);
        break;
      case "teamMembers":
        setTeamMembers(newVal);
        break;
      case "groups":
        setGroups(newVal);
        break;
      case "trialProtocol":
        setTrialProtocol(newVal);
        break;
      case "consentForm":
        setConsentForm(newVal);
        break;
    }
  };

  let currentFormFields;
  if (step === 1) {
    currentFormFields = (
      <>
        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <TrialDetails />
          </Paper>
        </div>

        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <SiteDetails
              sites={sites}
              allSites={dummySiteData}
              teamMembers={teamMembers}
              handleTrialChange={handleTrialChange}
            />
          </Paper>
        </div>
      </>
    );
  } else if (step === 2) {
    currentFormFields = (
      <div className={classes.paperContainer}>
        <Paper elevation={3}>
          <GroupDetails />
        </Paper>
      </div>
    );
  } else {
    currentFormFields = (
      <>
        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <TrialProtocolDetails />
          </Paper>
        </div>
        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <ConsentFormDetails />
          </Paper>
        </div>
      </>
    );
  }

  const createTrial = () => {
    console.log(name, sites, teamMembers, groups, trialProtocol, consentForm);
  };

  return (
    <div className={classes.root}>
      <div className={classes.gridStyle}>
        <Grid container>
          <Grid item xs={9}>
            <div className={classes.heading}>
              <Typography variant="h1">
                Create Trial
                <IconButton
                  color="primary"
                  style={{ padding: "0 0 10px 10px" }}
                >
                  <Delete fontSize="large" />
                </IconButton>
              </Typography>
            </div>
            <div className={classes.subheading}>
              <Typography variant="h5">{stepDescriptions[step - 1]}</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <AddTrialProgressButtons
                step={step}
                setStep={setStep}
                createTrial={createTrial}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {currentFormFields}

      <FooterButton
        buttonText={step === 1 ? "Add Sites" : "Add Groups"}
        onClick={() => {
          if (step === 1) {
            const updatedSites: Site[] = [
              ...sites,
              {
                name: "",
                address: "",
                trials: [],
                teamMembers: [],
                cccs: [],
                id: 1,
              },
            ];
            setSites(updatedSites);
          if (step === 2) {
            const updatedGroups: Group[] = [
              ...groups,
              {
                name: "",
                patients: [],
                trial: [],
                teamMembers: [],
                cccs: [],
                id: 1,
              },
            ];
            setSites(updatedSites);
          }
        }}
      />
    </div>
  );
}
