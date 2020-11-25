import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));


export default function Conversations(props) {

  const { userID } = props;

  useEffect(() => {
    axios.get(`/api/conversations/${userID}`)
    .then(response => {
      console.log(response.data);
    })
  },[])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Conversations for user {userID}</h3>
    </div>
  )
}