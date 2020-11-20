import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



export default function App() {

  const [message, setMessage] = useState('Welcome to the app')

  const fetchGigs = () => {
    axios
      .get("/api/gigs")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const createGigs = () => {
    axios
      .put("/api/gigs")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const deleteGigs = () => {
    axios
      .delete("/api/gigs/1")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const fetchUsers = () => {
    axios
      .get("/api/users")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const signUp = () => {
    axios
      .put("/signup")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const logIn = () => {
    axios
      .post("/login")
      .then((response) => {
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

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
