import Axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function GigPage(props) {

  const [gig, setGig] = useState(props.gig);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/api/users/${gig.contractor_id}`)
    .then(response => {
      console.log(response.data);
      setUser(response.data[0])
    })
  },[])

  const params = useParams();
  console.log(gig);

  return (
    <div>
      <h1>This is the page for gig {gig.id} owned by user id {user.first_name}</h1>
      <p>About {user.first_name}: {user.bio}</p>
      <p>This is the price of the gig: {gig.price}</p>
    </div>
  )
}