import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useParams, Link, Switch } from 'react-router-dom';
import GigPage from './GigPage';
import GigGrid from './Gigs/GigGrid';
import axios from 'axios';

export default function CategoryPage() {

  const params = useParams();
  const category = params.category;
  const [gigs, setGigs] = useState([]);
  const [gig, setGig] = useState({});


  // The first axios request gets the id of the current category page we are on
  // The second axios request gets the gigs in that category using the id from the first axios request
  // I am pretty sure there is a better way to do this, was stuck here so decided to try this - SM
  useEffect(() => {
    axios.get(`/api/categories/${category}`)
    .then(response => {
      return axios.get(`/api/gigs/category/${response.data}`)
    })
    .then(response => {
      setGigs(response.data);
    })
  },[]);

  const getGig = (id) => {
    const gig = gigs.find(gig => gig.id == id);
    setGig(gig);
  }

  return (
    <div>
      <h1>We are on the {category} page!</h1>
      <Router>
        
        <Switch>
          <Route 
            path={`/gigs/${category}/:gig_id`}
            component={() => <GigPage gig={gig}/>}
          />
          <Route 
            path={`/gigs/${category}`} 
            component={() => <GigGrid getGig={getGig} gigs={gigs} category={category}/>}
          />
        </Switch>

      </Router>
    </div>
  )
}