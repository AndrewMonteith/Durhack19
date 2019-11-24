import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Button, Checkbox, FormControl, FormControlLabel, FormGroup, RadioGroup, Radio } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
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
        width: '100%',
        bottom: '30%',
    },
    searchfield: {
        width: '100%',
    },
    formrow: {
        margin: 'auto',
        width: '70%',
    },

}))

function SearchBox() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
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
                        id="search-field"
                        className={classes.searchfield}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                console.log(document.getElementById("search-field").value)
                                console.log(document.getElementById("postcode-field").value)
                                e.preventDefault();
                            }
                        }}
                        placeholder="Search..."
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton aria-label="">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">
                                    <TextField
                                        id="postcode-field"
                                        placeholder="Postcode..."
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton aria-label="">
                                                        <NearMeOutlinedIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}

                                    />
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