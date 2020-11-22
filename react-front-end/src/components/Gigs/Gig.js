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
    maxWidth: 345,
    margin: 10,
  },
});

export default function GigCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to='/gigs'>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="140"
            image={props.avatar}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Rating name="size-medium" defaultValue={props.rating} />
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
