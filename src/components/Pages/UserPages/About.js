import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { brown } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import imge from '../../../assests/c3.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="./">
        NoQueue Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  image: {
    backgroundImage: 'url(https://image.freepik.com/free-photo/blur-short-white-hospital-walkway-background_7180-2422.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    height: '100%',
    position:'relative',
    fontFamily:'Arial',
    fontSize:'5 rem',
    justifyContent:'center',
    alignItems:'center',
    filter:'blur(0px)',
  },
  
  
  form: {
    width: '60%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: theme.spacing(0),
  },

  typo:{
  color: brown[700],
  fontWeight: 'bold',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container component="main" >
    
      <Grid item xs={12}>
        <div className={classes.image}>

          <div className={classes.form} noValidate>
         
          <Box mt={12}></Box>
          <h6 className="text-4xl text-pink-900 text-center font-semibold">
           - Our Story -
           </h6>

          <Box mt={5}></Box>
           <Grid container>
           <Typography position="absolute" component="h1" variant="h6"  className={classes.typo} align="justify">
             We are 4 undergraduates from faculty of Engineering, University of Ruhuna, who are trying to find a way to get rid of the infection threat of current pandamic situation. NoQueue is an application designed focusing on medical centers to provide an easy to use solution to avoid unnecessary exposure to crowds in waiting rooms. It facilitates an effective and convenient way to channel your doctor and reach your doctor just on time.  Our aim is to provide a significant way to minimize the infection threat of Covid-19 as well as to save your valuable time.  Our main outlook is to control the dynamic queues in medical centers while minimizing the risk of Covid -19 infection by limiting the patients per time.
          </Typography>
           </Grid>

          <Box mt={5}>
            <Copyright />
            </Box>
          <Box mt={5}></Box>
           </div>
           </div>
          </Grid>
          </Grid>
    
    
  );
}