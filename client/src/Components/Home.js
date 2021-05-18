import React from 'react';
import Navbar from './Navigation/Navbar';
import {useState,useEffect} from 'react';
import{useHistory} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    title:{
        color:"#dee3ea",
        fontSize: 'large'
    },
    name:{
        color: '#dee3ea'
    },
    input:{
        
        outline: 'none',
        resize: 'none',
        fontFamily: 'calibri',
        fontSize: 'medium',
        fontWeight: 'bold',
        width: '70%'
    },
    submit:{
        background: '#fd4d4d',
        color:'black',
        '&:hover': {
            
            background: '#57f207'
        }
    },
    inputArea:{
        position: 'absolute',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },
    msg:{
         marginTop:'10vh',
        maxHeight:'70vh',
        color:"#79E9DE",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        overflowY:'auto'
    },
    paper:{
        marginBottom:'5px',
        padding: '10px',
        width: '70%'
    },
    username:{
        background:'black',
        color:'white'
    }

}))

export default function Home(){

    const classes = useStyles();
    const history =useHistory();
    const [name,setName]= useState([]);
    const [userId,setUserId]= useState([]);
    const [newMsg,newMsgData] = useState({});

    const [msgData,setMsgData] = useState([]);
    
    useEffect(()=>{
        fetch('/auth/isauth').then(res=>{
            if(res.status===200){
                return res.json();
            }
            else {
                history.push("/login");
            }
        }).then(result=>{
            setName(result.user.firstName);
            setUserId(result.user.googleId);
        }).catch(err=>{
            console.log(err);
            history.push("/login");
        })
    });

    useEffect(()=>{
        fetch('/api/allmsgs')
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
        })
        .then((result)=>{
            setMsgData(result)
        })
    })

    async function apiPost(){
        try{ 
           const res = await fetch('api/newmsg',{
            method: "POST",
            body: JSON.stringify({
                txt: newMsg.txt,
                username: newMsg.username,
                userID: newMsg.userId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
         })
         console.log(res.status);
        }catch(err){
            console.log(err);
        }
    }

    const handleChange=(e)=>{
       
        newMsgData({
            txt: e.target.value,
            username: name,
            userId: userId,
        })
    }
    
    function handleSubmit(){
        console.log(newMsg);
        apiPost();
    }

    return(
    <div>
        <Navbar/>
        <Typography className={classes.title}>Welcome! {name}</Typography>
       
        <div className={classes.msg}>
        {msgData.map((chat)=>(
               <Paper className={classes.paper}>
                   <div className={classes.username}>{chat.username}:</div> {chat.txt}
                   </Paper> 
               ))}
        </div>
        
        <div className={classes.inputArea}>
        <TextareaAutosize
            className={classes.input}
            name="newmsg"
            id="newmsg"
            rowsMax={3}
            placeholder="Type a message"
            autocomplete="off"
            onChange={handleChange}
            onSelect={handleChange}
        />
        <IconButton 
        className={classes.submit}
        onClick={handleSubmit}
        >
            <SendIcon fontSize='small'/>
        </IconButton>
        </div>
    </div>
    );
}