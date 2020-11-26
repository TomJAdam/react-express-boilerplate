import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((props) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '70px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    borderRadius: '20px',
    margin: '0.3rem 0rem 0.3rem 0rem',
    transition: '0.3s ease-in-out',
    background: props => props.id === parseInt(props.conv_id) ? '#0EE290' : 'white',
    '&:hover': {
      background: '#0EE290',
      color: 'white'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: 'white'
    }
  }
}));

export default function Conversation(props) {


  const classes = useStyles(props);




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