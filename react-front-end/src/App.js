import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import GigGrid from "./components/Gigs/GigGrid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GigForm from "./components/Gigs/GigForm";
import UserProfile from './components/user_profile';
import Home from "./components/Home";
import Gigs from "./components/Gigs";
import { useApplicationData } from "./hooks/useApplicationData";




export default function App() {

  const {
    categories
  } = useApplicationData();

  console.log(categories);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path='/gigs' component={() => <Gigs categories={categories}/>}/>
          <Route path='/profile' component={UserProfile} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* uncomment to see the page */}
      {/* <UserProfile/> */}
    </div>
  );
}
