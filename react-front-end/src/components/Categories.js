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

const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    title: "Plumbing",
    author: "person",
  },
  {
    img:
      "https://images.unsplash.com/photo-1590529989936-f6efdf774c23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    title: "Hardwood Floors",
    author: "person",
  },
  {
    img:
      "https://images.unsplash.com/photo-1549448046-b89e7214060d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2691&q=80",
    title: "Landscaping",
    author: "person",
  },
  {
    img:
      "https://images.unsplash.com/photo-1543525324-9146d43c2a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    title: "Renovations",
    author: "person",
  },
];

export default function Categories() {
  const classes = useStyles();

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
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
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
