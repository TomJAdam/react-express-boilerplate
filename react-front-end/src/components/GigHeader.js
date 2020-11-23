import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '200px',
    backgroundColor: '#EFEFEF'
  },

  infoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  infoBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

}));

export default function GigHeader(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <h1>{props.first} {props.last}</h1>
        <p>{props.title}</p>
        <div className={classes.infoBottom}>
          <Rating name="read-only" value={45} readOnly />
          <p>${props.price}</p>
        </div>  
      </div>

    </div>
  )
}