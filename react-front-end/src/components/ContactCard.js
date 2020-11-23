import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px 0.5px #E3E3E3',
    margin: '1rem',
    padding: '0.5rem 1.5rem 1.5rem 1.5rem'
  }

}));

export default function ContactCard(props) {

  const classes = useStyles();
  return (
    <div className={classes.card}>
     <h1 style={{margin: '0.5rem', borderBottom: '2px solid #0EE290', padding: '0.5rem'}}>Contact</h1>
     <p>Other stuff</p>
     <p>Other stuff</p>
     <p>Other stuff</p>
     <p>Other stuff</p>

    </div>
  )
}