import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const useStyles = makeStyles((theme) => ({

  scroll: {
    maxHeight: '500px',
  }

}));


export default function Feed(props) {

  const { messages, userID } = props;
  // console.log('in the feed', messages);

  const classes = useStyles();



  return (
    <ScrollToBottom className={classes.scroll} mode='bottom'>
      {messages.map(message => {
        return(
          <Message {...message} userID={userID}/>
        )
      })}
    </ScrollToBottom>
  )
}