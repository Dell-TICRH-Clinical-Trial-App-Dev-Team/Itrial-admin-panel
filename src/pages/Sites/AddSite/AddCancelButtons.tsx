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

export default function AddCancelButtons({ submitSite }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.btnContainer}>
        <Button className={classes.btnStyle} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button
          className={classes.btnStyle}
          variant="contained"
          color="primary"
          onClick={submitSite}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
