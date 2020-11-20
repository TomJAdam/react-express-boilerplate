import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Navbar/Navbar";

export default function App() {

  const [message, setMessage] = useState('Welcome to the app')

  const fetchGigs = () => {
    axios
      .get("/api/gigs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  const createGigs = () => {
    axios
      .put("/api/gigs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  const deleteGigs = () => {
    axios
      .delete("/api/gigs/1") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  const fetchUsers = () => {
    axios
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  const signUp = () => {
    axios
      .put("/signup") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  const logIn = () => {
    axios
      .post("/login") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
      <button onClick={fetchGigs}>Fetch Gigs</button>
      <button onClick={createGigs}>Create Gigs</button>
      <button onClick={deleteGigs}>Delete Gigs</button>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logIn}>Log In</button>
    </div>
  );
}
