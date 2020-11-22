import React from 'react';
import { useParams } from 'react-router-dom';

export default function GigPage() {

  const params = useParams();

  return (
  <h1>This is the page for gig {params.gig_id}</h1>
  )
}