import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '0rem 2rem 2rem 1rem',
    height: 'auto',
    position: 'relative'
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontSize: '20px',
    borderBottom: '3px solid #0EE290'
  }
});

export default function CategoryCard(props) {
  const classes = useStyles();
  const link = `/gigs/${props.name}`

  return (
    <Link to={link}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            id={props.id}
            component="img"
            alt={props.name}
            height="300"
            image={props.avatar}
          />
          <Typography className={classes.overlay}>
            {props.name}
          </Typography>
        </CardActionArea>
      </Card>
    </Link>
  );
}