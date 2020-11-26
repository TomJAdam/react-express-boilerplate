import React from "react";
import OrderItem from "./OrderItem";
import { Divider } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  new: {
    backgroundColor: "#66bb6a",
    color: "white",
  },
  head: {
    margin: "1em auto 1em",
  }
});


export default function MyOrder(props) {

  const classes = useStyles();
  return (
    <>
      <h1 className={classes.head}>My Orders</h1>
      <Divider style={{ width: "50%", margin: "2em auto" }} />
      {props.orders && props.orders.map(order => {
        return <OrderItem order={order}/>;
      })}
    </>
  );
}