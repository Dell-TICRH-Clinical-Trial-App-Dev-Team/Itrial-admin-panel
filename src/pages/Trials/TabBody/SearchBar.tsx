import React from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from "@material-ui/icons/Search"

//styling
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: "10px 0",
        border: "1px solid #ABC3D1",
        borderRadius: "36px",
        width: "248px",
        height: "36px",
    },
    textRoot: {
       paddingRight: "20px"
    },
    input: {
        margin: "0 20px 0 20px",
    }
}));

//search bar above trial entry
const SearchBar : React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div >
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    fullWidth={true}
                    endAdornment={<SearchIcon />}
                    classes={{
                        input: classes.input,
                        root: classes.textRoot
                    }}
                />
            </div>
        </div>
    )
}

export default SearchBar;
