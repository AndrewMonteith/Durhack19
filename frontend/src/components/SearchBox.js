import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar'
import { TextField, IconButton, Button, Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { green } from '@material-ui/core/colors';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
    searchbox: {
        background: 'white',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: '5px',
        color: 'white',
        padding: '10px',
        margin: 'auto',
        width: '100%',
        bottom: '30%',
    },
    spacing: {
        padding: '20px',
        borderColor: 'white',
    },
    formrow: {
        margin: 'auto',
        width: '70%',
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

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    return (
        <>
            <FormGroup row className={classes.formrow}>
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="primary" />
                    }
                    label="Looking for Advice"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange('checkedB')}
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="Looking for Meetups"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedC}
                            onChange={handleChange('checkedC')}
                            value="checkedC"
                            color="primary"
                        />
                    }
                    label="Looking for Help"
                />
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
            </FormGroup>
            




        </>
    )
}

export default SearchBox