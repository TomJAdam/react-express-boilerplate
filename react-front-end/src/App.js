import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import GigGrid from "./components/Gigs/GigGrid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SearchCard from "./components/Search_card";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Router>
      <SearchCard />
      <GigGrid />
    </div>
  );
}
