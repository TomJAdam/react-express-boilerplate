import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    border: '1px solid grey'
  },

  sent: {
    border: '2px solid orange'
  },

  received: {
    border: '2px solid black'
  }

}));


export default function Message(props) {

  const classes = useStyles();

  console.log('props', props);
  console.log('this is the user in the message component', props.sender_id);

  return(
    props.sender_id === props.userID ? (
      <div className={classes.sent}>
        <p>{props.text}</p>
      </div>
    ) : 
    (
    <div className={classes.received}>
        <p>{props.text}</p>
    </div>
    )
    
  )

}