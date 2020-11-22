import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useApplicationData } from "../hooks/useApplicationData";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import CategoryCard from './CategoryCard';
import PopularHeading from "./PopularHeading";

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  card: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  categoriesTitle: {
    width: "100%",
    borderBottom: "8px solid #66bb6a",
  },

  title: {
    margin: '2rem 0rem 2rem 0rem'
  }
}));

export default function Categories() {

  const classes = useStyles();
  const { categories } = useApplicationData();
  console.log(categories);

  return (
    <div>
      <PopularHeading />
      <Grid container className={classes.card}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {categories.map((category) => {
              return (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  avatar={category.img}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
