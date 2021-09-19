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

export default function AddCancelButtons({ step }) {
  const classes = useStyles();

  let buttons;
  if (step === 1)
    buttons = (
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Next
      </Button>
    );
  else if (step === 2)
    buttons = (
      <>
        <Button className={classes.btnStyle} variant="outlined" color="primary">
          Back
        </Button>
        <Button
          className={classes.btnStyle}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </>
    );
  else
    buttons = (
      <>
        <Button className={classes.btnStyle} variant="outlined" color="primary">
          Back
        </Button>
        <Button
          className={classes.btnStyle}
          variant="contained"
          color="primary"
        >
          Create Trial
        </Button>
      </>
    );

  return (
    <div className={classes.root}>
      <div className={classes.btnContainer}>{buttons}</div>
    </div>
  );
}
