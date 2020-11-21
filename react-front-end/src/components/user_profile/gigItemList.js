import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: "2em auto",
    padding: '0 2em',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#0bcc50'
  },
  desc: {
    textAlign: 'left'
  },
}));

export default function GigItemList() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.left}>
        <div className={classes.desc}>
          <h5>
          I will create SEO optimized content for your plumbing website!
          </h5>
          <Box color="text.secondary">
            Plumbing
          </Box>
        </div>
        <p>Novemver 16, 2020</p>
      </Box>
      <Box className={classes.right}>
        Active
      </Box>
    </ Paper>
  )
  
}