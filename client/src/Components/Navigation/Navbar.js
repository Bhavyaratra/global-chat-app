import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    navbar: {
            justifyContent: 'center',
    },
    bar: {
        background: 'black',
        maxHeight: '8hv',
    },
    barButton: {
        float:'right',
        backgroundColor: 'rgb(208, 0, 0)',
        color:'white',
        
    },
    title: {
        marginLeft: '2%',
    },
    link:{
        textDecoration: 'none',
    }

}))

export default function Navbar(){
    const classes=useStyles();

    return(

        <div className={classes.navbar}>
            <AppBar position='static' className={classes.bar}>
                <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    Chat
                </Typography>
                <a href="http://localhost:3001/auth/logout" className={classes.link}>
                    <Button className={classes.barButton}>
                        Logout
                    </Button>
                </a>
                </Toolbar>
            </AppBar>
        </div>
    )    
}