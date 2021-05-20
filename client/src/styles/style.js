import {makeStyles} from '@material-ui/core/styles';

 const useStyles = makeStyles(()=>({
    title:{
        color:"#dee3ea",
        fontSize: 'large'
    },
    name:{
        color: '#dee3ea'
    },
    input:{
        
        background:'#3a3a3a',
        outline: 'none',
        resize: 'none',
        fontFamily: 'calibri',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width:'100%',
        padding:'10px 10px',
        paddingBottom:'10px',
        border:'none',
        borderRadius:'25px',
        textAlign:'left',
        color:'#dee3ea'
    },
    submit:{
        background: '#fd4d4d',
        color:'black',
        '&:hover': {
            
            background: '#57f207'
        }
    },
    inputArea:{
        marginTop:'10px',
        display: 'flex',
        
    },
    msg:{
        width:'100%',
        height:'100vh',
        maxHeight:'70vh',
        margin:'0 auto',
        color:"#79E9DE",
        display:'flex',
        flexDirection:'column',
        alignItems: 'right',
        padding:'10px 0',
        overflowY:'auto',
        background:'#161b22',
        fontSize:'large',
    
    },
    username:{
      
    },
    sent:{
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent:'center',
        background:'#0b93f6',
        marginBottom:'5px',
        padding: '10px 20px',
        maxWidth: '500px',
        alignSelf:'flex-end',
        borderRadius: '25px'
    },
    recieved:{
        display:'flex',
        justifyContent:'center',
        background:'#2cd46b',
        marginBottom:'10px',
        padding: '10px 20px',
        maxWidth: '500px',
        alignSelf:'flex-start',
        borderRadius: '25px'
    },
    img:{
        borderRadius:'50%',
        width: '25px',
        height: '25px'
    }

    
}))

export {useStyles}