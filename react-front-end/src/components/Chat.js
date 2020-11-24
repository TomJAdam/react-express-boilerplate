import React, { useEffect, useContext, useState } from 'react';
import queryString from 'query-string';
import { UserCookie } from "../hooks/UserCookie";
// import { UserCookie } from "../../hooks/UserCookie";
// const { cookie, setCookie } = useContext(UserCookie);



export default function Chat({ location }) {

  // API call to get all messages for particular conversation using conversation_id from url
  // API call to get id's for conversation

  const [conversationID, setConversationID] = useState(null);
  const [room, setRoom] = useState('');
  const [userID, setUserID] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:8080';


  useEffect(() => {
    const { conv_id } = queryString.parse(location.search);
    setRoom(conv_id);
    console.log('the room we are in', room)
  })

  return (
    <h1>We are on the chat page currently in room {room}</h1>
  )
}