import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useParams, Link, Switch } from 'react-router-dom';
import GigPage from './GigPage';
import GigGrid from './Gigs/GigGrid';
import axios from 'axios';

export default function CategoryPage() {

  const params = useParams();
  const category = params.category;

  useEffect(() => {
    axios.get(`/api/categories/${category}`)
    .then(response => {
      console.log(response);
    })
  },[])

  // Need all gigs in category from API here - pass these to GigGrid

  const gigs = [
    {
      id: 1,
      contractor_id: 1,
      price: 200,
      title: "I'll fix it!",
      description:
        "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
      photo_one:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_two:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_three:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      id: 2,
      contractor_id: 2,
      title: "I'll fix it!",
      price: 200,
      description:
        "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
      photo_one:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_two:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_three:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      id: 3,
      contractor_id: 3,
      title: "I'll fix it!",
      price: 200,
      description:
        "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
      photo_one:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_two:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_three:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      id: 4,
      contractor_id: 4,
      title: "I'll fix it!",
      price: 200,
      description:
        "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
      photo_one:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_two:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      photo_three:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
  ];

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