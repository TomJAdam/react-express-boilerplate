import React, { useState } from "react";
import { Paper, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GigDelete from "./gigDelete";
import { Redirect } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "2em auto",
    padding: "0 2em",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  left: {
    width: "60%",
    marginLeft: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#0bcc50",
  },
  desc: {
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  avatar: {
    marginTop: 20,
    objectFit: "cover",
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "2px solid black",
  },
  delete: {
    marginLeft: 17,
    color: "black",
  },
}));

export default function GigItemList(props) {
  const [redirect, setRedirect] = useState(false);
  const [category, setCategory] = useState(0);

  const {
    id,
    contractor_id,
    category_id,
    title,
    description,
    photo_one,
    phone_two,
    photo_three,
  } = props.gig;

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={12}>
        <Grid item spacing={3}>
          <img className={classes.avatar} alt="avatar" src={photo_one} />
        </Grid>
        <Box className={classes.left}>
          <Grid item spacing={6}>
            <div className={classes.desc}>
              <h3>{title}</h3>
            </div>
            <Box color="text.secondary">{description}</Box>
            <p>Novemver 23, 2020</p>
          </Grid>
        </Box>
      </Grid>
      <Box className={classes.right}>
        <h3>Active</h3>
        <GigDelete class={classes.delete} gigId={id}/>
      </Box>
    </Paper>
  );
}
