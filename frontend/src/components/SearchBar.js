import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    boxff: {
      color: 'red',
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



function SearchBar() {
    
    const classes = useStyles();



    return (
        <>
            <h1 className={classes.box}>vmdfvmfvdv</h1>
            gjetigeor

        </>
    )
}

export default SearchBar