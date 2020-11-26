import React, {useState} from "react";
import CompleteButton from "./CompleteButton";
import ConfirmButton from "./ConfirmButton";

export default function ContractorButton(props) {
  const [status, setStatus] = useState("pending");
  const changingStatus = () => {
    setStatus("completed")
  }
 return <>
 {status === "pending" ? <ConfirmButton onclick={changingStatus}/> :
 <CompleteButton status={status} />}
 </>
}
