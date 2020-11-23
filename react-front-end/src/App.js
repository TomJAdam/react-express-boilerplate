import React, { useState, useContext } from "react";
import axios from "axios";
import "./App.css";
import GigGrid from "./components/Gigs/GigGrid";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GigForm from "./components/Gigs/GigForm";
import UserProfile from "./components/user_profile";
import Home from "./components/Home";
import Gigs from "./components/Gigs";
import { useApplicationData } from "./hooks/useApplicationData";
import { UserCookie } from "./hooks/UserCookie";
import { useEffect } from "react";

export default function App() {
  const history = useHistory();
  const [cookie, setCookie] = useState({ userId: null });
  useEffect(() => {
    axios.get("/login").then((res) => {
      setCookie({ ...res.data });
    });
  }, []);

  return (
    <div className="App">
      <UserCookie.Provider value={{ cookie, setCookie }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/signin">
              {cookie.userEmail ? <Redirect to="/" /> : <SignIn />}
            </Route>
            <Route path="/signup">
              {cookie.userEmail ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/gigs" component={Gigs} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </UserCookie.Provider>
      {/* uncomment to see the page */}
      {/* <UserProfile/> */}
    </div>
  );
}
