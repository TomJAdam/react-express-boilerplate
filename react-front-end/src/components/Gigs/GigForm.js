import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  categoryList: {
    marginTop: '2rem',
    backgroundColor: '#EFEFEF',
    width: '40%',
  },

  listContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  formContainer: {
    borderRadius: '8px',
    width: '45%',
    paddingTop: '3rem',
    paddingBottom: '1rem',
    padding: '2rem',
    boxShadow: '1px 2px 2px 2px lightgrey'
  },

  field: {
    margin: '1.5rem',
  },

  title: {
    display: 'flex',
  },

  photoBtn: {
    color: green[400]
  },

  submitBtn: {
    backgroundColor: green[400],
    color: 'white',
    marginTop: '2rem'
  },

  moneyInput: {
    marginTop: '2rem',
    width: '40%'
  }


}));

const options = [
  'Select an item',
  'Plumbing',
  'Hardwood Flooring',
  'Landscaping',
  'Electrical/Electrician',
];

export default function GigForm(props) {

  // props.setShow(false);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [values, setValues] = useState({
    title: '',
    amount: '',
    description: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.root}>
      <div style={{backgroundColor: '#EFEFEF', width: '100vw', height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2>Get paid for your valuable skills</h2>
      </div>
      <h1 style={{borderBottom: '2px solid #43a047', width: '40%'}}>Create a New Gig</h1>
      <Grid item xs={12} className={classes.formContainer}>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <TextField
            required 
            label="Title"
            type="text"
            placeholder="Title"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}  
          />
          <div className={classes.listContainer}>
            <div className={classes.categoryList}>
              <List component="nav" aria-label="Device settings">
                <ListItem
                  button
                  aria-haspopup="true"
                  aria-controls="lock-menu"
                  aria-label="Choose a Category"
                  onClick={handleClickListItem}
                >
                  <ListItemText primary="Select category" secondary={options[selectedIndex]} />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
          <FormControl className={classes.moneyInput} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Hourly Rate</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={85}
            />
          </FormControl>
          <br/>
          <br/>
          <div className={classes.title}>
            <h3>Description</h3>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Share some details about the service you're providing"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <br/>
          <br/>
          <div>
            <h3>Portfolio Photos</h3>
              <Button component="label" className={classes.photoBtn} variant="outlined">
                  Upload
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    style={{display: 'none'}}
                  />
              </Button>
          </div>
          <Button className={classes.submitBtn} size="large" variant="contained">Submit</Button>
        </form>
      </Grid>
    </Grid>
    
  )
}