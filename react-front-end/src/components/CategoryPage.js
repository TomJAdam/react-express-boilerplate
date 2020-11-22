import React from 'react';
import { BrowserRouter as Router, Route, useParams, Link, Switch } from 'react-router-dom';
import GigPage from './GigPage';
import Gig from './GigPage';

export default function CategoryPage() {

  const params = useParams();
  const category = params.category;
  console.log(category);

  return (
    <div>
      <h1>We are on the {category} page!</h1>
      <Router>
        <Link to={`/gigs/${category}/banana`}>Click Me</Link>


        <Switch>
          <Route path={`/gigs/${category}/:gig_id`} component={GigPage}/>
        </Switch>
    
      </Router>
    </div>
  )
}