import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import SearchBar from "./SearchBar";
import {Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
}));
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

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
            {value === index && (
                <div className={classes.root} >
                    <SearchBar />
                    <div>
                        <div>Trial name</div>
                        <div>Start</div>
                        <div>Completion date</div>
                        <div>Endpoints</div>
                        <div>Status</div>
                    </div>
                    <div>{children}</div>
                </div>
            )}
        </div>
    );
}

export default TabPanel;
