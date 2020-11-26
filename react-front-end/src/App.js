import React from "react";
import "./App.css";
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
import Chat from "./components/Chat";
import { UserCookie } from "./hooks/UserCookie";
import useAppData from "./hooks/useAppData";
import { getGigbyUserId, getAllOrdersbyId } from "./helpers/dataHelpers";
import SearchResults from "./components/SearchResults";
import IndexBottom from "./components/IndexBottom";

export default function App() {
  const { cookie, state, setCookie, setState } = useAppData();
  const gigsByUser = getGigbyUserId(cookie, state);
  const ordersByUser = getAllOrdersbyId(cookie, state);

  const style = {
    marginTop: 65,
  };
  return (
    <div className="App">
      <UserCookie.Provider value={{ cookie, setCookie, state, setState }}>
        <Router>
          <Navbar ordersByUser={ordersByUser} />
          <Switch>
            <div style={style}>
              <Route exact path="/" component={Home} />
              <Route path="/chat" component={Chat} />
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
              <Route path="/search/:search">
                <SearchResults />
              </Route>
            </div>
          </Switch>
          <IndexBottom />
        </Router>
      </UserCookie.Provider>
    </div>
  );
}
