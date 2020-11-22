import React from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {

  const params = useParams();
  return (
  <h1>We are on the {params.category_id} page!</h1>
  )
}