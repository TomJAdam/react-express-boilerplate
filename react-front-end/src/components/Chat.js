import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { UserCookie } from "../hooks/UserCookie";
import io from 'socket.io-client';
import Feed from './Feed';
import Input from './Input';
import Conversations from './Conversations';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    background: '#E3E3E3',
    height: '200px'
  },

  main: {
    padding: '2rem',
    width: '70%',
    display: 'flex',
    // position: 'absolute',
    height: '600px',
    // top: '220px'
  },
  
  conv: {
    width: '40%',
    marginRight: '2rem',
    background: 'white',
    borderRadius: '10px'
  },

  chat: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'flex-end',
    background: 'white',
    width: '60%',
    padding: '1rem',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    borderRadius: '8px'
  },

  emptyChat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: 'white',
    width: '60%',
    // height: '400px',
    padding: '1rem',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    borderRadius: '8px'
  },
  
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  gigsBtn: {
    backgroundColor: "#0EE290",
    color: "white",
    marginTop: "2rem",
  },
}));

let socket;

export default function Chat({ location }) {

  const classes = useStyles();

  const { cookie, setCookie } = useContext(UserCookie);
  const [conversationID, setConversationID] = useState(null);
  const [room, setRoom] = useState(null);
  const [userID, setUserID] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:8080';

  const { conv_id } = queryString.parse(location.search);

  useEffect(() => {

    // console.log('THE CONVERSATION ID', conv_id);

    if (conv_id) {
      axios.get(`/api/messages/${conv_id}`).then(response => {
        // console.log('AFTER THE MESSAGES API CALL', response.data);
        setMessages(response.data);
        // console.log('messages', messages);
      })
    }
    
  },[room]);


  useEffect(() => {
    const { conv_id } = queryString.parse(location.search);
    // console.log(conv_id);
    setRoom(conv_id);
    // console.log('room', room);
    socket = io(ENDPOINT);
    socket.emit('join', { conv_id }, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  },[ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      // console.log('message from the socket', message);
      setMessages([...messages, message])
    })
  },[messages])

  const sendMessage = (event) => {

    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, { id: cookie.user.id }, () => setMessage(''))
    }
  }

  // console.log('cookie', cookie.user.first_name);

  return (

    cookie.user ? (
      <div className={classes.root}>
        <div className={classes.header}>
          <h1>Not sure what to put here</h1>
        </div>
        <div className={classes.main}>
         <div className={classes.conv}>
           <Conversations conv_id={conv_id} userID={cookie.user.id}/>
         </div>
         {
          conv_id ? <div className={classes.chat}>
            <Feed messages={messages} userID={cookie.user.id}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
          </div> 
          : <div className={classes.emptyChat}>
            <h3>Select an existing conversation or browse the gigs to find a contractor and start chatting!</h3>
            <Button
              component={Link} to='/gigs'
              type="submit"
              size="medium"
              variant="contained" 
              className={classes.gigsBtn}
            >
              Browse Gigs
            </Button>
            <div className={classes.iconContainer}>
              <ChatIcon style={{fontSize: '20rem', color: '#E3E3E3'}}/>
            </div>
          </div>
         }
      </div>
     </div>
    ) : <h1>not loaded lol</h1>

    

  )
}