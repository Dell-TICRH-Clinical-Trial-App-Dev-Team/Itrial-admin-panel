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

interface CardProps {
    name: string,
    startDate: string,
    completionDate: string,
    endpoints: number,
    status: string

}
const InfoCard: React.FC<CardProps> = ({name, startDate, completionDate, endpoints, status}) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item className={classes.section} xs={4}>
                <Typography variant="h6" >
                    {name}
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="h6" >
                    {startDate}
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="h6" >
                    {completionDate}
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="h6" >
                    {endpoints}
                </Typography>
            </Grid>
            <Grid item className={classes.section} xs={2}>
                <Typography variant="h6" >
                    {status}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default InfoCard;

