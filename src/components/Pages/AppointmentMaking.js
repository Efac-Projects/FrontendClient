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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="#">
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
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
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

}));

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    
        <div className={classes.paper}>
          

          <Typography component="h1" variant="h5">
            Personal details of the patient
          </Typography>

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

<Grid item xs={12}>
      <InputLabel htmlFor="select">Gender</InputLabel>
      <NativeSelect id="select">
      <option value="1">Male</option>
      <option value="2">Female</option>
      </NativeSelect>
      </Grid>
     
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
    //defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />

Address
<Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
    
            Have you previously attended our facility?
            
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

           If yes, state on which condition and when?
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
          </form>
        </div>
  );
}