import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='primary' href='Home'>
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>

      <Typography component='h1' variant='h5'>
        Got a question?
      </Typography>

      <Box mt={4}></Box>

      <Typography component='h1' variant='h7'>
        Contact Us
      </Typography>

      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='name1'
          label='Full Name'
          name='name'
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='email'
          label='Email Address'
          type='name'
          id='name2'
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='message'
          label='Message for our team'
          type='message'
          id='message'
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Submit
        </Button>
        <Grid container>
          <Grid item>
            <Link href='signup' variant='body2'>
              {'Not a member? Sign Up'}
            </Link>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}
