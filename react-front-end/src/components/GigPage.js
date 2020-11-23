import Axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GigHeader from './GigHeader';
import GigDetails from './GigDetails';
import Grid from '@material-ui/core/Grid';
import ContactCard from './ContactCard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    paddingTop: '1rem'
  },

  card: {
    borderRadius: '8px',
    boxShadow: '0px 2px 5px 0.5px #E3E3E3'
  }


}));

export default function GigPage() {

  const classes = useStyles();

  const [gig, setGig] = useState({});
  const [user, setUser] = useState({});

  const params = useParams();

  useEffect(() => {
    axios.get(`/api/gigs/${params.gig_id}`)
    .then(response => {
      setGig(response.data[0])
      const id = response.data[0].contractor_id;
      return axios(`/api/users/${id}`)
    })
    .then(response => {
      setUser(response.data[0])
    })
  },[])

  return (
    <div>
      <GigHeader
        first={user.first_name}
        last={user.last_name}
        title={gig.title}
        price={gig.price}
      />
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" className={classes.root}>
          <Grid item sm={8}>
            <GigDetails
              bio={user.bio}
              education={user.education}
            />
          </Grid>
          <Grid item sm={3}>
            <ContactCard
              city={user.city}
              phone={user.phone_number}
              email={user.email}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}