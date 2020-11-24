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
    border: '1px solid red'
  },

  main: {
    width: '70%',
    display: 'flex',

  },
  
  conv: {
    width: '40%',
    border: '1px solid grey'
  },

  chat: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid blue'
  }
}));

let socket;

export default function Chat({ location }) {

  const classes = useStyles();

  // API call to get all messages for particular conversation using conversation_id from url
  // API call to get id's for conversation
  const { cookie, setCookie } = useContext(UserCookie);
  const [conversationID, setConversationID] = useState(null);
  const [room, setRoom] = useState(null);
  const [userID, setUserID] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:8080';

  // console.log('current user', cookie.user.id);

  // This used to be inside of useEffect() - not sure if it should be outside - is working but revise later
  const { conv_id } = queryString.parse(location.search);

  useEffect(() => {
    axios.get(`/api/messages/${conv_id}`).then(response => {
      console.log(response.data);
      setMessages(response.data);
      console.log('messages', messages);
    })
  },[])


  useEffect(() => {
    // const { conv_id } = queryString.parse(location.search);
    console.log(conv_id);
    setRoom(conv_id);
    console.log('room', room);
    socket = io(ENDPOINT);
    console.log(socket);
    console.log('the room we are in', room)

    return () => {
      socket.off();
    }
  },[ENDPOINT, location.search])

  console.log('messages', messages);

  return (
    <div className={classes.root}>
     <h1>We are on the chat page currently in room {room}</h1>
     <div className={classes.main}>
        <div className={classes.conv}>
          <Conversations />
        </div>
        <div className={classes.chat}>
          <Feed messages={messages}/>
          <Input />
        </div>
     </div>
     {/* {messages.map(message => {
       return <p>{message.text}</p>
     })} */}
    </div>
  )
}