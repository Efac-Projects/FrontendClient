import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { lightBlue } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="Home">
        NoQueue Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: lightBlue[50],
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3,0,2),
  },
  typo:{
    color: blueGrey[700],
    },

}));

export default function AppointmentMaking() {
  const classes = useStyles();

  return (
    
        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h5">
            Personal details of patient
          </Typography>
          <Box mt={2}></Box>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
            />       

<Box mt={1}></Box>
<Grid item xs={12}>
      <InputLabel htmlFor="select">Gender</InputLabel>
      <NativeSelect id="select" fullWidth>
      <option value="1">Male</option>
      <option value="2">Female</option>
      </NativeSelect>
      </Grid>

      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
            />
     
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phonenumber"
              label="Telephone Number"
              type="phonenumber"
              id="phonenumber"
            />

           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            /> 

<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="date"
    label="Birthday"
    type="date"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <Box mt={1}></Box>

  <Typography component="h7" variant="h7"  className={classes.typo}>
Address
</Typography>

<Box mt={2}></Box>
<Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
           <Box mt={1}></Box>
        
          <TextField
          variant="outlined"
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
           <Box mt={1}></Box>
        
          <TextField 
            required
            variant="outlined"
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
           <Box mt={1}></Box>
       
          <TextField 
          variant="outlined"
          id="state" 
          name="state"
          label="State/Province/Region"
          fullWidth />
           <Box mt={1}></Box>
       
          <TextField
            required
            variant="outlined"
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Box mt={3}></Box>

        <Typography component="h7" variant="h7"  className={classes.typo}>
            Have you previously attended our facility?
            </Typography>
            
              <FormGroup row>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="Yes"
                color="primary"
              />

               <FormControlLabel
        control={
          <Checkbox
            name="checkedB"/>}
            label="No"
            color="primary"
          />
           </FormGroup>
           <Box mt={1}></Box>
           <Typography component="h7" variant="h7"  className={classes.typo}>
           If yes, state on which condition and when?
           </Typography>

           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="text"
              name="text"
            /> 

           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Doctor's Name"
              name="name"
            /> 

    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="date"
      label="Appointment Date"
      type="date"
      className={classes.textField}
      InputLabelProps={{
      shrink: true,
    }}
  />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >  
            Submit Form
            </Button>
            
            <Box mt={4}>
              <Copyright />
            </Box>
            <Box mt={5}></Box>
          </form>
        </div>
  );
}