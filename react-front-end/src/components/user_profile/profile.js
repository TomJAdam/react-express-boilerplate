import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, Divider} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h1>Name</ h1>
      <Divider />
      <li>
        <h2>Location</h2>
        <p>Vancouver</p>
      </li>
      <li>
      <h2>Contact Info</h2>
        <p>Phone: 555-555-5555</p>
        <p>Email: email@email.com</p>
      </li>
      <li>
        <h2>Description</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </li>
      <li>
        <h2>Education</h2>
        <p>University of LightHouse</p>
      </li>
      <li>
        <h2>Certification</h2>
        <p>Certification 1</p>
        <p>Certification 2</p>
      </li>
    </List>
  );
}