import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GigCard from "./Gigs/Gig";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
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

  console.log(props.location.searchParams);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {/* {props.gigs.map((gig) => {
            return (
              <GigCard
                key={gig.id}
                id={gig.id}
                name={gig.title}
                avatar={gig.photo_one}
                description={gig.description}
                rating={4}
                category={props.category}
                gig={gig}
              />
            );
          })} */}
        </Grid>
      </Grid>
    </Grid>
  );
}
