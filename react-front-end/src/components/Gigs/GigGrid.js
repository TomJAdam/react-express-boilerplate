import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GigCard from "./Gig";

const useStyles = makeStyles((theme) => ({
  root: {
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
          {gigs.map((gig) => {
            return (
              <GigCard key={gig.id} name={gig.title} avatar={gig.photo_one} />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

const gigs = [
  {
    id: 1,
    contractor_id: 1,
    price: 200,
    title: "I'll fix it!",
    description:
      "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
    photo_one:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_two:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_three:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: 2,
    contractor_id: 2,
    title: "I'll fix it!",
    price: 200,
    description:
      "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
    photo_one:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_two:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_three:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: 3,
    contractor_id: 3,
    title: "I'll fix it!",
    price: 200,
    description:
      "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
    photo_one:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_two:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_three:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: 4,
    contractor_id: 4,
    title: "I'll fix it!",
    price: 200,
    description:
      "The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.",
    photo_one:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_two:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    photo_three:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
];
