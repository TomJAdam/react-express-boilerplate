import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import GigGrid from "./Gigs/GigGrid";
import axios from 'axios';

export default function GigsHome() {

  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    axios.get('/api/gigs')
    .then(response => {
      console.log(response.data);
      setGigs(response.data)
    })
  },[])

  return(
    <div>
      <Categories />
      <GigGrid gigs={gigs}/>
    </div>
  )
}