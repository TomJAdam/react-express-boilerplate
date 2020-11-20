import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import GigGrid from "./Gigs/GigGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  fetchGigs = () => {
    axios
      .get("/api/gigs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  createGigs = () => {
    axios
      .put("/api/gigs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  deleteGigs = () => {
    axios
      .delete("/api/gigs/1") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  fetchUsers = () => {
    axios
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  signUp = () => {
    axios
      .put("/signup") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  logIn = () => {
    axios
      .post("/login") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchGigs}>Fetch Gigs</button>
        <button onClick={this.createGigs}>Create Gigs</button>
        <button onClick={this.deleteGigs}>Delete Gigs</button>
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.logIn}>Log In</button>
        <GigGrid />
      </div>
    );
  }
}

export default App;
