import React,{ useState } from 'react';
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GigForm from "./Gigs/GigForm";
import GigGrid from "./Gigs/GigGrid";


export default function Gigs(props) {

  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Categories />}
      <Route path='/gigs/new' component={() => <GigForm setShow={setShow}/>}/>
      {show && <GigGrid />}
    </div>
  )
}