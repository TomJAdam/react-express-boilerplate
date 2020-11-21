import React from 'react';
import Categories from "./Categories";
import IndexBottom from './IndexBottom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    width: '100vw',
    height: '500px',
    marginTop: '3rem',
    paddingTop: '3rem',
    backgroundColor: 'rgba(14, 226, 144, 0.2)',
    display: 'flex',
    flexDirection: 'column'
  }

}))


export default function Home() {

  const classes = useStyles();

  return (
      <div>
        <Categories />
        <div className={classes.root}>
          <IndexBottom />
        </div>
      </div>
  )
}