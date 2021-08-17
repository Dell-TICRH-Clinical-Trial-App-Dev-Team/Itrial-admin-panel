import React from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        // border: "1px solid black"
    },
}));
const InfoHeading: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item className={classes.section} xs={4}>
                <Typography variant="subtitle1" >
                    Trial name
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="subtitle2">
                   Start date
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="subtitle1">
                   Completion data
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="subtitle1">
                   Endpoints
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="subtitle1">
                    Status
                </Typography>
            </Grid>
        </Grid>
    )
}

export default InfoHeading;
