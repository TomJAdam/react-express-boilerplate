import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
  }

}));


export default function Feed(props) {

  const { messages } = props;

  return (
    <div>
      {messages.map(message => {
        return <p>{message.text}</p>
      })}
    </div>
  )
}