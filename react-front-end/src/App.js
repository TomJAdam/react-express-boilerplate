import React from "react";
import "./App.css";
import GigGrid from "./components/Gigs/GigGrid";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/user_profile";
import Home from "./components/Home";
import Gigs from "./components/Gigs";
import { useApplicationData } from "./hooks/useApplicationData";
import { UserCookie } from "./hooks/UserCookie";
import useAppData from "./hooks/useAppData";
import { getGigbyUserId } from "./helpers/dataHelpers";

export default function App() {
  const { cookie, state, setCookie, setState } = useAppData();
  const gigsByUser = getGigbyUserId(cookie, state);

  console.log(state);
  return (
    <div className="App">
      <UserCookie.Provider value={{ cookie, setCookie }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/signin">
              {cookie.user ? <Redirect to="/" /> : <SignIn />}
            </Route>
            <Route path="/signup">
              {cookie.user ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/gigs" component={Gigs} />
            <Route path="/profile">
              {cookie.user ? (
                <UserProfile user={cookie.user} gigs={gigsByUser} />
              ) : (
                <Redirect to="/signin" />
              )}
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </UserCookie.Provider>
      {/* uncomment to see the page */}
      {/* <UserProfile/> */}
    </div>
  );
}
