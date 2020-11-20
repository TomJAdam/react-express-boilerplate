import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GigCard from "./Gig";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GigGrid(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0, 1, 2, 3, 4, 5, 6].map((value) => (
            <GigCard key={props.id} name={props.name} avatar={props.avatar} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
