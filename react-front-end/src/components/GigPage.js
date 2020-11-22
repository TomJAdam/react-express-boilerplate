import React from 'react';
import { useParams } from 'react-router-dom';

export default function GigPage() {

  const params = useParams();

  // API call(s) to get gig and user info

  return (
  <h1>This is the page for gig {params.gig_id}</h1>
  )
}