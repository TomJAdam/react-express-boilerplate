import React from 'react';
import Categories from "./Categories";
import IndexBottom from './IndexBottom';
import PopularHeading from './PopularHeading';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  styles: {
    width: '100vw',
    height: '500px',
    marginTop: '3rem',
    paddingTop: '3rem',
    backgroundColor: 'rgba(14, 226, 144, 0.2)',
  }

}))

export default function Home() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Categories />
        <div className={classes.styles}>
          <IndexBottom />
        </div>
      </div>
  )
}