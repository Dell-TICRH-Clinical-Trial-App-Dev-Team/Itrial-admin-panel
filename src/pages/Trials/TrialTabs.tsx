import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabBody/TabPanel";
import Button from "@material-ui/core/Button";
import InfoCards from "./TabBody/Cards/InfoCards";

//FIXME: Replace with real data
import data from "./dummyData.json"

interface item {
    name: string,
    startDate: string,
    completionDate: string,
    endpoints: number,
    status: string,
    id: number
}

let dummyData : item[] = data;



const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
    appBar: {
        boxShadow: "none",
        backgroundColor: "white",
    },
    tabs: {
        backgroundColor: "white"
    }
}));

const all : string = "all";
const active : string = "active";
const pending : string = "pending";



const Trials = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    className={classes.tabs}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="All"  />
                    <Tab label="Active"  />
                    <Tab label="Pending"  />
                    <Tab label="Ending"  />
                </Tabs>
            </AppBar>
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

export default Trials;
