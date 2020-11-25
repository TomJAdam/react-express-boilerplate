import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const useStyles = makeStyles((theme) => ({

  root: {
  }

}));


export default function Feed(props) {

  const { messages, userID } = props;
  console.log(messages);



  return (
    // <ScrollToBottom>
    <div>
      {messages.map(message => {
        return(
          <Message {...message} userID={userID}/>
        )
      })}
    </div>
    // </ScrollToBottom>
  )
}