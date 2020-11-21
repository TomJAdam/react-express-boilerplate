import React from 'react';
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GigForm from "./Gigs/GigForm";


export default function Home() {
  return (
    <div>
      <Categories/>
      <Route path='/gigs/new' component={GigForm}/>
    </div>
  )
}