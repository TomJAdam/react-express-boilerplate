import React from "react";
import CompleteButton from "./CompleteButton";
import ConfirmButton from "./ConfirmButton";

export default function ContractorButton(props) {
 return <>
 {props.order.status === "pending" ? <ConfirmButton/> :
 <CompleteButton status={props.order.status}/>}
 </>
}
