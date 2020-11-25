import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Conversation from './Conversation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));


export default function Conversations(props) {

  const { userID } = props;
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    axios.get(`/api/conversations/${userID}`)
    .then(response => {
      console.log('ovea here', response.data);
      setConversations(response.data);
    })
  },[])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      {conversations.map(conversation => {
        return (
          <Conversation />
        )
      })}
    </div>
  )
}