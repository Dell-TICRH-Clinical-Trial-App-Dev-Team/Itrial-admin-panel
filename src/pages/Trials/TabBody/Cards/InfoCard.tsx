import React from 'react';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";

//styling
const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        display: "flex",
        width: "100%",
        padding: "10px 0",
        borderRadius: "6px",
        margin: "4px 0"
    },
    section: {
         // border: "1px solid black"
    },
    name: {
        marginLeft: "24px"
    },
    status: {
        display: "flex"
    }
}));

//typescript
interface CardProps {
    name: string,
    startDate: string,
    completionDate: string,
    endpoints: number,
    status: string

}

//Represents singular data entry
const InfoCard: React.FC<CardProps> = ({name, startDate, completionDate, endpoints, status}) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Paper className={classes.paper}>
                <Grid item className={classes.section} xs={4}>
                    <Typography variant="h6" className={classes.name}>
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
                    <div className={classes.status}>
                        <Typography variant="h6" >
                            {status}
                        </Typography>
                        <KeyboardArrowRightIcon  />
                    </div>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default InfoCard;

