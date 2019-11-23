import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar'
import { TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
    searchbox: {
        background: 'white',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: '5px',
        color: 'white',
        padding: '10px',
        margin: 'auto',
        width: '70%',
        bottom: '30%',
    },
    spacing: {
        padding: '20px',
        borderColor: 'white',
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    }
}))



function SearchBox() {

    const classes = useStyles();



    return (
        <>
            <div className={classes.searchbox}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Search..."
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton aria-label="">
                                <SearchIcon />
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>




        </>
    )
}

export default SearchBox