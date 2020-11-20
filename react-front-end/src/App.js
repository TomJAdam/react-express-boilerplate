import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import UseMessage from './hooks/axios-example'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const dummyData = {
  categories: ['plumbing', 'ceiling', 'HVAC']
}
export default function App() {
  
  const {fetchGigs, 
    createGigs, 
    deleteGigs, 
    fetchUsers, 
    signUp, 
    logIn,
    message,
  } = UseMessage();
  
  return (
  <Router>
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
      {dummyData.categories.map(each => {
        return <Link to={'/' + each}>{each}</Link>
      })}
      <button onClick={fetchGigs}>Fetch Gigs</button>
      <button onClick={createGigs}>Create Gigs</button>
      <button onClick={deleteGigs}>Delete Gigs</button>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logIn}>Log In</button>
    </div>
  </Router>
  );
}
