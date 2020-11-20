import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import GigGrid from "./Gigs/GigGrid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


export default function App() {

  const [message, setMessage] = useState('Welcome to the app')

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Router>
    </div>
  );
}
