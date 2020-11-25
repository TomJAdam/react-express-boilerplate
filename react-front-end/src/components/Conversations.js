import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Conversation from './Conversation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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

  useEffect(() => {
    axios.get(`/api/conversations/${userID}`)
    .then(response => {
      // console.log('ovea here', response.data);
      setConversations(response.data);
    })
  },[])

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Conversations</h3>
      {conversations.map(conversation => {
        // console.log(conversation);
        return (
          <Conversation {...conversation} userID={userID}/>
        )
      })}
    </div>
  )
}