import axios from 'axios';
import {useState} from 'react';
const UseMessage = () => {

  const [message, setMessage] = useState("Click the button to load data!");

  const fetchGigs = () => {
    axios
      .get("/api/gigs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API
  
        console.log(response.data.message); // Just the message
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


  return {fetchGigs, 
    createGigs, 
    deleteGigs, 
    fetchUsers, 
    signUp, 
    logIn,
    message,
  }
}

export default UseMessage;
