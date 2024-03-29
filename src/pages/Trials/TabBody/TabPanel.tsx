import React, { FC, ReactNode } from "react";
import { makeStyles, Theme } from "../../../styles/material-ui";
import SearchBar from "../../../components/SearchBar";
import InfoHeading from "./Cards/InfoHeading";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  body: {
    margin: "0 7.4vw",
  },
}));

interface props {
  children?: ReactNode;
  index: any;
  value: any;
}

// wrapper for each individual tab content
const TabPanel: FC<props> = ({ children, value, index, ...other }) => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      data-testid={`tab-${index}`}
      {...other}
    >
      <div className={classes.root}>
        <div className={classes.body}>
          <SearchBar />
          <div>
            <InfoHeading />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
