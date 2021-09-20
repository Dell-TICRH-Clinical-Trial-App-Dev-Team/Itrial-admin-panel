import React from "react";
import { makeStyles, Button, Theme } from "../../../styles/material-ui";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "100px",
  },
  btnContainer: {
    padding: "30px 0 0 0",
  },
  btnStyle: {
    margin: "0 5px",
  },
}));

export default function AddTrialProgressButtons({
  step,
  setStep,
  createTrial,
}) {
  const classes = useStyles();

  const nextButton = (
    <Button
      className={classes.btnStyle}
      variant="contained"
      color="primary"
      onClick={() => setStep(step + 1)}
    >
      Next
    </Button>
  );

  const backButton = (
    <Button
      className={classes.btnStyle}
      variant="outlined"
      color="primary"
      onClick={() => setStep(step - 1)}
    >
      Back
    </Button>
  );

  const createTrialButton = (
    <Button
      className={classes.btnStyle}
      variant="contained"
      color="primary"
      onClick={() => createTrial()}
    >
      Create Trial
    </Button>
  );

  let buttons;
  if (step === 1) buttons = nextButton;
  else if (step === 2)
    buttons = (
      <>
        {backButton}
        {nextButton}
      </>
    );
  else
    buttons = (
      <>
        {backButton}
        {createTrialButton}
      </>
    );

  return (
    <div className={classes.root}>
      <div className={classes.btnContainer}>{buttons}</div>
    </div>
  );
}
