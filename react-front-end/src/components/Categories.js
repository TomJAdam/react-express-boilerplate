import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

export default function Categories(props) {
  const classes = useStyles();

  console.log('inside of categories', props.categories);


  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.categoriesTitle}
      >
        Categories
      </Typography>
      <GridList className={classes.gridList} cols={2.5}>
        {props.categories.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
