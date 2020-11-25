import React, { useEffect, useContext, useState } from 'react';
import queryString from 'query-string';
import { UserCookie } from "../hooks/UserCookie";
import io from 'socket.io-client';
import Feed from './Feed';
import Input from './Input';
import Conversations from './Conversations';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  main: {
    width: '70%',
    display: 'flex',

  },
  
  conv: {
    width: '40%',
    marginRight: '2rem'
  },

  chat: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #EFEFEF',
    borderRadius: '4px'
  }
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
    axios.get(`/api/messages/${conv_id}`).then(response => {
      console.log(response.data);
      setMessages(response.data);
      console.log('messages', messages);
    })
  },[room]);


  useEffect(() => {
    const { conv_id } = queryString.parse(location.search);
    console.log(conv_id);
    setRoom(conv_id);
    console.log('room', room);
    socket = io(ENDPOINT);
    socket.emit('join', { conv_id }, () => {

    });

    return () => {
      socket.off();
    }
  },[ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('message from the socket', message);
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
      <h1>Hello, {cookie.user.first_name}!</h1>
      <div className={classes.main}>
         <div className={classes.conv}>
           <Conversations userID={cookie.user.id}/>
         </div>
         <div className={classes.chat}>
           <Feed messages={messages} userID={cookie.user.id}/>
           <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
         </div>
      </div>
     </div>
    ) : <h1>not loaded lol</h1>

    

  )
}