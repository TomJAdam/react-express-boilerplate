import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({


  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px 0.5px #E3E3E3',
    margin: '1rem',
    padding: '0.5rem 1.5rem 1.5rem 1.5rem'
  },

  card: {
    textAlign: 'left'
  },

  title: {
    marginBottom: '0'
  },

  infoContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  infoItem: {
    margin: '0rem 1rem 0rem 0rem',
    color: '#9B9B9B'
  },

  contact: {
    display: 'flex',
    flexDirection: 'column'
  },

  submitBtn: {
    backgroundColor: '#0EE290',
    color: "white",
    marginTop: "2rem",
  },
  bookBtn: {
    backgroundColor: '#ffa400a6',
    color: "white",
    marginTop: "2rem",
  }
}));

const formatPhone = (number) => {

}

export default function ContactCard(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
     <h1 style={{margin: '0.5rem', borderBottom: '2px solid #0EE290', padding: '0.5rem'}}>Contact</h1>

     <div className={classes.card}>
       <h4 className={classes.title}>Location</h4>
       <div className={classes.infoContainer}>
        <LocationOnIcon className={classes.infoItem}/>
        <p classeName={classes.infoItem}>{props.city}</p>
       </div>
     </div>
     <div className={classes.card}>
        <h4 className={classes.title}>Contact Info</h4>
        <div className={classes.contact}>
          <div className={classes.infoContainer}>
            <CallIcon className={classes.infoItem}/>
            <p classeName={classes.infoItem}>{props.phone}</p>
          </div>
          <div className={classes.infoContainer}>
            <MailOutlineIcon className={classes.infoItem}/>
            <p classeName={classes.infoItem}>{props.email}</p>
          </div>
        </div>
     </div>
     <Button
        type="submit"
        className={classes.bookBtn}
        size="large"
        variant="contained"
        onClick={props.onBooking}
        >
        Reservation
      </Button>
      <Button
        type="submit"
        className={classes.submitBtn}
        size="large"
        variant="contained">
        Message
      </Button>
    </div>
  )
}