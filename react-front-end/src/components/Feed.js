import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
  }

}));


export default function Feed(props) {

  const { messages, userID } = props;



  return (
    <div>
      {messages.map(message => {
        return <p>{message.text}</p>
      })}
      <p>current user {userID}</p>
    </div>
  )
}