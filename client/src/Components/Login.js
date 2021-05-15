import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(()=>({
    loginpaper: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        marginTop: '20vh'
    },
    paper: {
        background: '#151a21',
        maxWidth: '350px',
        width: '100%',
        color: '#dee3ea',
        textTransform: 'none',
        padding: '40px',
        paddingTop: '20px'
    },
    button:{
        background:'#242c37',
        color: '#dee3ea',
        fontSize: '18px',
        textTransform: 'none',
        paddingLeft: '50px',
        paddingRight: '50px',
        fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif'
    },
    link:{
        textDecoration: 'none'
    },
    icon:{
        paddingRight: '10px'
    }
    



}));

export default function Login(){
    const classes = useStyles();
    return(<div className={classes.loginpaper}>
        <Paper className={classes.paper}>
        <h2>Login</h2>
            <a href="http://localhost:3001/auth/google" className={classes.link}>
                <Button className={classes.button}><LockIcon className={classes.icon}/>Log in with Google</Button>
            </a>
        </Paper>
        </div>)
}