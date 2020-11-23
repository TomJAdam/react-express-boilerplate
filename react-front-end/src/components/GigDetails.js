import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  card: {
    textAlign: 'left',
    padding: '1rem'
  }

}))

export default function GigDetails(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 style={{margin: '0.5rem'}}>Gig Details</h1>
      <div className={classes.card}>
        <h4>About Me</h4>
        <p>This is going to be the bio. We just have to replace this text with the text from the props
          I am just writing this fake long bio to see how this looks on the page.
        </p>
      </div>
    </div>
  )
}