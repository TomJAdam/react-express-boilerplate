import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
  },

  message: {
    // height: '30px',
    borderRadius: '4px'
  },

  text: {
    padding: '10px'
  },

  sentContainer: {
    backgroundColor: '#0EE290',
    textAlign: 'right'
  },
  
  sentText: {
    color: 'white'
  },

  receivedContainer: {
    backgroundColor: '#EFEFEF',
    textAlign: 'left'
  },

  receivedText: {
    color: 'black'
  }

}));


export default function Message(props) {

  const classes = useStyles();

  // console.log('props', props);
  console.log('this is the user in the message component', props.sender_id);

  return(
    props.user === props.userID || props.sender_id === props.userID ? (
      <div className={classes.root}>
        <div className={`${classes.message} ${classes.sentContainer}`}>
          <p className={`${classes.sentText} ${classes.text}`}>{props.text}</p>
        </div>
      </div>
    ) : 
    (
    <div className={classes.root}>
      <div className={`${classes.message} ${classes.receivedContainer}`}>
        <p className={`${classes.receivedText} ${classes.text}`}>{props.text}</p>
      </div>
    </div>
    )
    
  )

}