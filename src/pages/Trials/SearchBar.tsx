import React from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';

// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: "10px 0",
    },
    searchBar: {
        border: "1px solid #ABC3D1",
        borderRadius: "36px",
        width: "248px",
        height: "36px",
        // marginLeft: "10px"
    }
}));

const SearchBar : React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div >
                <InputBase
                    placeholder="Search…"
                    classes={{
                        input: classes.searchBar

                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    )
}

export default SearchBar;
