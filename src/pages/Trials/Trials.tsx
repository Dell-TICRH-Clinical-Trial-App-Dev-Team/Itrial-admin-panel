import React from 'react';
import TrialTabs from "./TrialTabs";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        height: "64px",
        borderBottom: "1px solid black",
        backgroundColor: "white"

    },
    heading: {
        height: "100px",
        backgroundColor: "white"
    }
}));

const Trials = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.appBar}>App bar</div>
            <div className={classes.heading}>
                <Typography variant="h1">
                    Trials
                </Typography>
            </div>
            <TrialTabs />
        </div>
    )
}

export default Trials;
