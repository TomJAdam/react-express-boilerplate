import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));


export default function Input() {

  return (
    <form>
    <input 
      type="text"
      // value={message}
      placeholder="Type a message..."
      // onChange={(event) => setMessage(event.target.value)}
      // onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button >Send</button>
  </form>
  )
}