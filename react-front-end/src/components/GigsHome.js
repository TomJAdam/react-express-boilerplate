import React from 'react';
import Categories from './Categories';
import GigGrid from "./Gigs/GigGrid";

export default function GigsHome() {

  // Need all gigs from API here - pass these to GigGrid

  return(
    <div>
      <Categories />
      <GigGrid />
    </div>
  )
}