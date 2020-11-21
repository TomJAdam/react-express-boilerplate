import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  formContainer: {
    borderRadius: '8px',
    width: '45%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    boxShadow: '1px 2px 2px 2px lightgrey'
  },

  field: {
    margin: '1.5rem',
  }

}));

export default function SignUp() {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <h1 className={classes.title}>Create Profile</h1>
      <Grid item xs={12} className={classes.formContainer}>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <TextField
              className={classes.field}
              required 
              label="First Name"
              type="text"
              placeholder="First Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="Last Name" 
              type="text"
              placeholder="Last Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field} 
              required 
              label="Email" 
              type="text"
              placeholder="Email"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="Province" 
              type="text"
              placeholder="Province"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="City" 
              type="text"
              placeholder="City"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="Address" 
              type="text"
              placeholder="Address"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="Password" 
              type="password"
              placeholder="Password"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <TextField
              className={classes.field}
              required 
              label="Confirm Password" 
              type="password"
              placeholder="First Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
            <br/>
            <br/>
            <br/>
            <TextField
              className={classes.field}
              required 
              label="Confirm Password" 
              type="password"
              placeholder="First Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}  
            />
        </form>
      </Grid>
    </Grid>
    
  )
}