import React from 'react';
import Navbar from './Navigation/Navbar';
import {useState,useEffect,useRef} from 'react';
import{useHistory} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import {useStyles} from '../styles/style.js';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

export default function Home(){

    const classes = useStyles();
    const history =useHistory();
    const [name,setName]= useState([]);
    const [userId,setUserId]= useState([]);
    const [userImage,setUserImage]= useState([]);
    const [newMsg,newMsgData] = useState({});
    const [msgData,setMsgData] = useState([]);

    const [response, setResponse] = useState("");
    const [newm, setnm] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
          setResponse(data);
        });
        socket.on("newmessage", nm => {
          setnm(nm);
          
        });

      }, []);
     
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
            setUserImage(result.user.image);
        }).catch(err=>{
            console.log(err);
            history.push("/login");
        })
    },[]);

    useEffect(()=>{
        fetch('/api/allmsgs')
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
        })
        .then((result)=>{
            setMsgData(result);
            
        })
    },[newm])

    async function apiPost(){
        try{ 
           const res = await fetch('api/newmsg',{
            method: "POST",
            body: JSON.stringify({
                txt: newMsg.txt,
                username: newMsg.username,
                userID: newMsg.userId,
                photo: newMsg.photo
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
            photo: userImage
        })
    }
    
  

    function ChatMessage(props){
        
        const message = props.message;
        const messageClass = userId===message.userID ? classes.sent : classes.recieved; 
       return (
       <>
       {/* <img className={classes.img} src={message.photo || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='O'/> */}
        <Paper className={`${messageClass}`}>
                { <img className={classes.img} src={message.photo || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=''/>}
         
            <div className={classes.username}>
            </div> 
                {message.txt}
        </Paper> 
       </>
       )
    }

    function handleSubmit(){
        console.log(newMsg);
        apiPost();
    }

    return(
    <div>
        <Navbar/>
        <Typography className={classes.title}>Welcome! {name}
        </Typography>
        
        <div className={classes.msg}>
        {msgData.map((chat)=>(
                 <ChatMessage message={chat}/>
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