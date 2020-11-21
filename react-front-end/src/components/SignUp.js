import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem'
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
  },

  title: {
    display: 'flex',
    marginLeft: '2.5rem',
  },


  bioField: {
    width: '90%'
  },

  photoBtn: {
    color: green[400]
  },

  submitBtn: {
    backgroundColor: green[400],
    color: 'white',
    marginTop: '2rem'
  }

}));

export default function SignUp() {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <h1 style={{borderBottom: '2px solid #43a047', width: '40%'}}>Create Profile</h1>
      <Grid item xs={12} className={classes.formContainer}>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <div className={classes.title}>
            <h3>Personal Information</h3>
          </div>
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
          <div className={classes.title}>
            <h3>Bio</h3>
          </div>
          <TextField
            className={classes.bioField}
            id="outlined-multiline-static"
            label="Tell us about yourself"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <br/>
          <br/>
          <div className={classes.title}>
          <h3>Education and Certifications</h3>
          </div>
          <TextField
            className={classes.bioField}
            id="outlined-multiline-static"
            label="Share some of your qualifications"
            multiline
            rows={2}
            variant="outlined"
            fullWidth
          />
          <br/>
          <br/>
          <div>
            <h3>Profile Photo</h3>
            <Button component="label" className={classes.photoBtn} variant="outlined">
                Upload Photo
                <input
                  type="file"
                  hidden
                />
            </Button>
          </div>
          <Button className={classes.submitBtn} size="large" variant="contained">Submit</Button>
        </form>
      </Grid>
    </Grid>
    
  )
}