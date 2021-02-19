import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {connect } from 'react-redux'
import {  Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment-timezone';
import Carousel from '../layouts/Carousel';

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
    flexGrow: 1,
  },
 
  img: {
    height: '100vh',
    display: 'block',
    maxWidth: 'Fullscreen',
    overflow: 'hidden',
    width: '100%',
  },
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: blue[100],
  },
  form: {
    width: '60%',
    height: '100%',
    marginTop: theme.spacing(0),
    backgroundColor: blue[400],
    color: blue[50],
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      
      <Grid item xs={12} component={Paper} square>
        <div className={classes.paper}>
          <Carousel/>
        <Box mt={10}></Box>

        <section className="pb-20 bg-blue-200 ">
              <div className=" mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className=" pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-purple-500 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                          <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Your Health is Our Priority</h6>
                        <p className="mt-2 mb-4 text-grey-900">
                        NoQueue facilitates an effective and convenient way to channel your doctor and reach your doctor just on time avoiding unnecessary expoesure to crowds.
                        </p>
                      </div>
                      <button  className="bg-purple-900 hover:bg-red-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">Our Services
                      <a href="services" className='text-gray-500'></a>
                      </button>
                    </div>
                  </div>
                  
    
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-pink-300 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Welcome to Our Service
                        </h6>
                        <p className="mt-2 mb-4 text-gray-900">
                        NoQueue is an application designed focusing on medical centers to provide an easy-to-use solution to avoid unnecessary overcrowding.
                        </p>
                      </div>
                      <button  className="bg-pink-600 hover:bg-red-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">About Us
                      </button>
                    </div>
                  </div>
    
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-green-300 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Best Doctors and Equipments
                        </h6>
                        <p className="mt-2 mb-4 text-gray-900">
                          Best doctors with best equipments supply their efficient service to serve you.
                        </p>
                      </div>
                      <button  className="bg-green-700 hover:bg-red-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">Make Appointment
                      <a href="appointmentmaking" className='text-gray-500'></a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
</Grid> 
    )
}
