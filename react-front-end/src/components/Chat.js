import React, { useEffect, useContext } from 'react';
import queryString from 'query-string';
// import { UserCookie } from "../../hooks/UserCookie";
// const { cookie, setCookie } = useContext(UserCookie);



export default function Chat({ location }) {

  // API call to get all messages for particular conversation using conversation_id from url

  useEffect(() => {
    const { contractor_id, client_id } = queryString.parse(location.search);
    console.log('c id', contractor_id);
    console.log('client id', client_id);
  })

  return (
    <h1>Here is the messaging page</h1>
  )
}