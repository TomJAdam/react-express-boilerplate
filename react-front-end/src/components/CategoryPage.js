import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useParams, Link, Switch } from 'react-router-dom';
import GigPage from './GigPage';
import GigGrid from './Gigs/GigGrid';
import axios from 'axios';

export default function CategoryPage() {

  const params = useParams();
  const category = params.category;
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    axios.get(`/api/categories/${category}`)
    .then(response => {
      console.log(response);
      return axios.get(`/api/gigs/${response.data}`)
    })
    .then(response => {
      console.log(response);
      setGigs(response.data);
    })
  },[])

  // Need all gigs in category from API here - pass these to GigGrid

  return (
    <div>
      <h1>We are on the {category} page!</h1>
      <Router>
        <GigGrid gigs={gigs}/>

        <Switch>
          <Route path={`/gigs/${category}/:gig_id`} component={GigPage}/>
        </Switch>
    
      </Router>
    </div>
  )
}