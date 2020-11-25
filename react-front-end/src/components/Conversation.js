import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border: '1px solid grey',
    width: '100%',
    height: '70px'
  }
}));

export default function Conversation(props) {


  const classes = useStyles();

  return(
    props.userID === props.client_id ? (
      <div className={classes.root}>
      <Link to={`/chat/?conv_id=${props.id}`}>
        <div className={classes.root}>
          <p>{props.contractor_first} {props.contractor_last}</p>
        </div>
      </Link>
    </div> 
    ) : (<div className={classes.root}>
    <Link to={`/chat/?conv_id=${props.id}`}>
      <div className={classes.root}>
        <p>{props.client_first} {props.client_last}</p>
      </div>
    </Link>
  </div> )
  )
}