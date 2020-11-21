import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({

  text: {
    color: "#212121"
  },

  icon: {
    fontSize: '4rem',
    marginTop: '2rem',
    marginBottom: '1rem'
  }
}));


export default function IndexBottom () {

  const classes = useStyles();


  return (
    <div>
      <h1 className={classes.text}>Why SimpliFix</h1>
      <AccessAlarmIcon className={classes.icon}/>
      <h4 className={classes.text}>Right at your fingertips, you can find trusted service providers in minutes</h4>
      <EventIcon className={classes.icon}/>
      <h4 className={classes.text}>A single platform to streamline communication and scheduling</h4>
    </div>
  )
}