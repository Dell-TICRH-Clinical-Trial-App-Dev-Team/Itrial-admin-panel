import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import SearchBar from "./SearchBar";
import {Theme} from "@material-ui/core/styles";
import InfoHeading from "./Cards/InfoHeading";

//styling
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
    body: {
        margin: "0 7.4vw"
    }
}));

//typescript
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}


//wrapper for each individual tab content
const TabPanel: FC<TabPanelProps> = ({children, value, index, ...other}) => {
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {/* Only displays if on the correct tab index */}
            {value === index && (
                <div className={classes.root} >
                    <div className={classes.body}>
                        <SearchBar />
                        <div >
                            <InfoHeading />
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TabPanel;
