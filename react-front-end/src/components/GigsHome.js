import React from 'react';
import Categories from './Categories';
import GigGrid from "./Gigs/GigGrid";

export default function GigsHome() {
  return(
    <div>
      <Categories />
      <GigGrid />
    </div>
  )
}