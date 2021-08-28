import React, { useEffect } from "react";
import store from "../../store";
import TrialTabs from "./TrialTabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: "64px",
    borderBottom: "1px solid black",
    backgroundColor: "white",
  },
  heading: {
    height: "100px",
    backgroundColor: "white",
    padding: "20px 0 0 7.4vw",
  },
}));

const DisplayUserInput = () => {
  if (store.getUserInfo) {
    return <div>{JSON.stringify(store.getUserInfo, null, 2)}</div>;
  }
  return <></>;
};

const Trials = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log(store.getUserInfo);
  };

  useEffect(() => {});
  return (
    <div>
      {/*FIXME: Add App Bar*/}
      <div className={classes.appBar}>App bar</div>

      <div className={classes.heading}>
        <Typography variant="h1">Trials</Typography>
      </div>
      <TrialTabs />
      <DisplayUserInput />
      <button onClick={handleClick}>GetUserINfo</button>
    </div>
  );
};

export default Trials;
