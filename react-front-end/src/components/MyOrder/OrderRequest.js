import React from 'react';
import OrderItem from "./OrderItem";

export default function OrderRequest(props) {
  return (
    <>
      {props.ordersRequest &&
        props.ordersRequest.map((order) => {
          const otherOrders = props.ordersRequest.filter(list => list.id !== order.id);
          return <OrderItem order={order} otherOrders={otherOrders}/>;
        })}
    </>
  );
}