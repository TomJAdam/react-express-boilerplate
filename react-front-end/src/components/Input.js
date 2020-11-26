import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: '10%',
  },

  input: {
    height: '2rem',
    width: '80%',
    border: '1px solid #E3E3E3',
    borderRadius: '20px',
    padding: '10px',
    '&:focus': {
      outline: 'none'
    }
  },
  
  button: {
    width: '100px',
    border: 'none',
    borderRadius: '20px',
    background: '#0EE290',
    color: 'white'
  }
}));


export default function Input(props) {

  const classes = useStyles();
  const { message, setMessage, sendMessage } = props;

  return (
    <form className={classes.form}>
    <input 
      className={classes.input}
      type="text"
      value={message}
      placeholder="Type a message..."
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className={classes.button} onClick={(event) => sendMessage(event)}>Send</button>
  </form>
  )
}