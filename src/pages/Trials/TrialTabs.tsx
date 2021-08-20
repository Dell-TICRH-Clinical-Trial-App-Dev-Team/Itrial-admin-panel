import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabBody/TabPanel";
import InfoCards from "./TabBody/Cards/InfoCards";

// FIXME: Replace with real data
import dummyTrialData from "./dummyTrialData";

export interface trialCardDTO {
  name: string;
  startDate: string;
  completionDate: string;
  patientsCompleted: string;
  status: string;
  id?: number;
}

let dummyData: trialCardDTO[] = dummyTrialData;

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

const TrialTabs = () => {
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
          aria-label="simple tabs example"
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All" data-testid="all-tab" />
          <Tab label="Active" data-testid="active-tab" />
          <Tab label="Pending" data-testid="pending-tab" />
          <Tab label="Ended" data-testid="ended-tab" />
        </Tabs>
      </AppBar>

      <TabPanel value={tabDisplaying} index={0}>
        <InfoCards data={dummyData} statusShow={"all"} />
      </TabPanel>
      <TabPanel value={tabDisplaying} index={1}>
        <InfoCards data={dummyData} statusShow={"active"} />
      </TabPanel>
      <TabPanel value={tabDisplaying} index={2}>
        <InfoCards data={dummyData} statusShow={"pending"} />
      </TabPanel>
      <TabPanel value={tabDisplaying} index={3}>
        <InfoCards data={dummyData} statusShow={"ended"} />
      </TabPanel>
    </div>
  );
};

export default TrialTabs;
