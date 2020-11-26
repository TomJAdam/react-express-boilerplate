import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Conversation from './Conversation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    height: '100%',
    borderRadius: '10px'

  },

  title: {
    borderBottom: '2px solid #0EE290',
    width: '60%'
  }
}));


export default function Conversations(props) {

  const classes = useStyles();
  const { userID } = props;
  const [conversations, setConversations] = useState([]);
  // console.log('in conversations !!!!', props.conv_id)

  useEffect(() => {
    axios.get(`/api/conversations/${userID}`)
    .then(response => {
      // console.log('ovea here', response.data);
      setConversations(response.data);
    })
  },[])

  return (
    conversations.length !== 0 ? (
      <div className={classes.root}>
      <h3 className={classes.title}>Conversations</h3>
      {conversations.map(conversation => {
        console.log(conversation)
          return <Conversation conv_id={props.conv_id} {...conversation} userID={userID}/>
      })}
    </div>
    ) : <h1>hi</h1>
  )
}