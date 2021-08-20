import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabBody/TabPanel";
import InfoCards from "./TabBody/Cards/InfoCards";

//FIXME: Replace with real data
import data from "./dummyData.json"

//data typescript, adapt for actual data
interface item {
    name: string,
    startDate: string,
    completionDate: string,
    patientsCompleted: string,
    status: string,
    id: number
}

let dummyData : item[] = data;

//styling
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
    appBar: {
        boxShadow: "none",
        backgroundColor: "white",
        paddingLeft: "7.4vw"
    },
    tabs: {
        backgroundColor: "white"
    }
}));

//Entry point for the Tabs
const TrialTabs= () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    //shifts tab display
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/* Tab header */}
            <AppBar position="static" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    className={classes.tabs}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="All" data-testid="all-tab" />
                    <Tab label="Active" data-testid="active-tab" />
                    <Tab label="Pending" data-testid="pending-tab" />
                    <Tab label="Ending" data-testid="ending-tab" />
                </Tabs>
            </AppBar>

            {/* Content per tab */}
            <TabPanel value={value} index={0}>
              <InfoCards data={dummyData} statusShow={"all"}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InfoCards data={dummyData} statusShow={"active"}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <InfoCards data={dummyData} statusShow={"pending"}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <InfoCards data={dummyData} statusShow={"ending"}/>
            </TabPanel>
        </div>
    );
};

export default TrialTabs;
