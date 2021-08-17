import React from 'react';
import TrialTabs from "./TrialTabs";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF"
    },
}));

const Trials = () => {
    const classes = useStyles();
    return (
        <div>
            <div>App bar</div>
            <h1>Trials</h1>
            <TrialTabs />
        </div>
    )
}

export default Trials;
