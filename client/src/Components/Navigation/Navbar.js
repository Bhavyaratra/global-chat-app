import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    navbar: {
             flexGrow: 1,
    },
    bar: {
        background: 'black',
        maxHeight: '8hv',
    },
    barButton: {
        marginRight: '2%',
        backgroundColor: 'red',
        color:'white',
    }

}))

export default function Navbar(){
    const classes=useStyles();

    return(

        <div className={classes.navbar}>
            <AppBar position='static' className={classes.bar}>
                <Typography>
                    chat
                </Typography>
                <Button className={classes.barButton}>
                    Logout
                </Button>
            </AppBar>
        </div>
    )    
}