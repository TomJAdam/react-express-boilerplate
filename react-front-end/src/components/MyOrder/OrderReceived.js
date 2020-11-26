import React from "react";
import OrderItem from "./OrderItem";

export default function OrderReceived(props) {
  return (
    <>
      {props.ordersReceived &&
        props.ordersReceived.map((order) => {
          const otherOrders = props.ordersReceived.filter(list => list.id !== order.id);
          return <OrderItem order={order} otherOrders={otherOrders}/>;
        })}
    </>
  );
}
