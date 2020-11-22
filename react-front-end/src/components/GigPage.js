import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

export default function GigPage(props) {

  const params = useParams();
  console.log(props.gig);

  return (
  <h1>This is the page for gig {params.gig_id} owned by {props.gig.contractor_id}</h1>
  )
}