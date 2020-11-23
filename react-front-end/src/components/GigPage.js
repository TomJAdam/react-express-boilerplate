import Axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GigHeader from './GigHeader';

export default function GigPage(props) {

  const [gig, setGig] = useState({});
  const [user, setUser] = useState({});

  const params = useParams();

  useEffect(() => {
    axios.get(`/api/gigs/${params.gig_id}`)
    .then(response => {
      setGig(response.data[0])
      const id = response.data[0].contractor_id;
      console.log(id);
      return axios(`/api/users/${id}`)
    })
    .then(response => {
      console.log(response.data);
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
      <h1>This is the page for gig {gig.id} owned by user id {user.first_name}</h1>
      <p>About {user.first_name}: {user.bio}</p>
      <p>This is the price of the gig: {gig.price}</p>
    </div>
  )
}