import React, { useEffect, useContext, useState } from 'react';
import queryString from 'query-string';
import { UserCookie } from "../hooks/UserCookie";
import io from 'socket.io-client';
import Feed from './Feed';
import Input from './Input';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {

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

  return (
    <div className={classes.root}>
     <h1>We are on the chat page currently in room {room}</h1>
    </div>
  )
}