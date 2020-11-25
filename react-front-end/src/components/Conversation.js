import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border: '1px solid grey',
    height: '70px'
  }
}));

export default function Conversation(props) {


  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>This is a conversation</p>
      <Link to={`/chat/?conv_id=${props.id}`}>Try this</Link>
    </div>
  )
}