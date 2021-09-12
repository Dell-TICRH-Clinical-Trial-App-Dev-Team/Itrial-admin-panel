import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "./TabBody/TabPanel";
import InfoCards from "./TabBody/Cards/InfoCards";

import { Site } from "../../api/models";

// FIXME: Replace with real data
import dummySiteData from "./dummySiteData";
let dummySites: Site[] = dummySiteData;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "white",
    paddingLeft: "7.4vw",
  },
  tabs: {
    backgroundColor: "white",
  },
}));

const SiteTabs = () => {
  const classes = useStyles();
  const [tabDisplaying, setTab] = React.useState(0);

  const handleChange = (_event, newTab: number) => {
    setTab(newTab);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={tabDisplaying}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All" data-testid="all-tab" />
          <Tab label="Active" data-testid="active-tab" />
          <Tab label="Inactive" data-testid="inactive-tab" />
        </Tabs>
      </AppBar>

      <TabPanel value={tabDisplaying} index={0}></TabPanel>
      <TabPanel value={tabDisplaying} index={1}></TabPanel>
      <TabPanel value={tabDisplaying} index={2}></TabPanel>
      <InfoCards sites={dummySites} statusShow={tabDisplaying} />
    </div>
  );
};

export default SiteTabs;
