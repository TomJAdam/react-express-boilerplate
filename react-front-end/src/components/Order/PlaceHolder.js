import React, {useState} from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import Loading from "./Loading";

export default function PlaceHolder(props) {
  const {gig, user, mode} = props;
  
  return (
    <div>
      <ReactPlaceholder type="media" rows={7} 
      customPlaceholder={<Loading gig={gig} user={user}/>}
      ready={mode === "SUCCESS"}>
        <h1>Successful</h1>
      </ReactPlaceholder>
    </div>
  );
}
