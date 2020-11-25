import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    border: '1px solid #C4C4C4',
    borderRadius: '4px',
    margin: '0.3rem 0rem 0.3rem 0rem',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#0EE290',
      color: 'white'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      // color: 'white'
    }
  }
}));

export default function Conversation(props) {


  const classes = useStyles();

  return(
    props.userID === props.client_id ? (
      <div className={classes.root}>
        <Link to={`/chat/?conv_id=${props.id}`}>
          <div className={classes.link}>
            <p>{props.contractor_first} {props.contractor_last}</p>
          </div>
        </Link>
      </div> 
    ) : (<div className={classes.root}>
    <Link to={`/chat/?conv_id=${props.id}`}>
      <div>
        <p className={classes.link}>{props.client_first} {props.client_last}</p>
      </div>
    </Link>
  </div> )
  )
}