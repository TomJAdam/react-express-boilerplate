import React, { useState } from "react";
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GigForm from "./Gigs/GigForm";
import GigsHome from "./GigsHome";
import CategoryPage from "./CategoryPage";
import SearchResults from "./SearchResults";

export default function Gigs(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/gigs" component={GigsHome} />
          <Route path="/gigs/new" component={GigForm} />
          <Route path="/gigs/:category" component={CategoryPage} />
          <Route path="/gigs/search" component={SearchResults} />
        </Switch>
      </Router>
    </div>
  );
}
