import React from "react";
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
import AddCancelButtons from "./AddTrialProgressButtons";
import FooterButton from "../../../components/FooterButton";

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
  const [step, setStep] = React.useState(1);
  const classes = useStyles();

  const stepDescriptions = [
    "Step 1/3 - Name your trial & add sites",
    "Step 2/3 - Add groups",
    "Step 3/3 - Attach trial protocol and consent form",
  ];

  let currentFormFields;

  if (step == 1)
    currentFormFields = (
      <>
        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <TrialDetails />
          </Paper>
        </div>

        <div className={classes.paperContainer}>
          <Paper elevation={3}>
            <SiteDetails />
          </Paper>
        </div>
      </>
    );

  let addFormField = () => {
    console.log("lmao");
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
              <AddCancelButtons step={step} />
            </div>
          </Grid>
        </Grid>
      </div>

      {currentFormFields}

      <FooterButton buttonText={step == 1 ? "Add Sites" : "Add Groups"} />
    </div>
  );
}
