import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {createTreatments} from '../../../actions/treatment'
import {getProfilebyID} from '../../../actions/businessprofile'




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
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    //backgroundColor: lightBlue[50],
    
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

const TreatmentMaking = ({setAlert,createTreatments,history,auth,match,getProfilebyID,profile:{profile,loading}}) => {

  const [formData, setFormData] = useState({
   businessId:"",
   specification:"",
   name:"",
   doctorName:"",
   price:'',
   duration:'',
   availability:'',
   day:'',
   date:'',
   timeFrom:'',
   timeTo:''

  })

  useEffect(() => {

    if (!profile) getProfilebyID(match.params.businessId);
    if (!loading && profile) {
      const profileData = { ...formData };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
     
      setFormData(profileData);
        }
          // eslint-disable-next-line
    }, [loading,getProfilebyID,profile])


const{businessId,specification,name,doctorName,price,availability,day,date,timeFrom,timeTo, duration}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (businessId && name && specification && doctorName && price) {

    e.preventDefault()
    createTreatments(formData,history)
  }
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }

  const classes = useStyles();

  return (
    
        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h5">
            Create the Treatment
          </Typography>
          <Box mt={0}></Box>

          <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >

              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='HIDDEN'
                name='businessId'
                value={businessId}
                hid
                onChange={(e) => onChange(e)}
                placeholder='Postal Code'
              />
              
            </div>
          </div>

           

            <TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              
              fullWidth
              id="name"
              label="Medical Center"
              name="name"
              value={name}
            />       

<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="specification"
              label="Specialized Area"
              name="specification"
              value={specification}
            />     



<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Doctor Name"
              label="Doctor's Name"
              name="doctorName"
              value={doctorName}
            />   



<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Duration"
              label="Duration"
              name="duration"
              value={duration}
            />   

<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Price"
              label="Charge"
              name="price"
              value={price}
            />  
            

<Box mt={2}></Box>

<Grid item xs={12}>
<div className='w-full  mb-6 md:mb-0'>
            <label
              className='block tracking-wide text-gray-500 text-sm mb-2'
              htmlFor='grid-state'
            >
              Availability
            </label>
            <div className='relative'>
              <select
                className='appearance-none block w-full text-gray-700 border border-gray-400 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                name='availability'
                value={availability}
                onChange={(e) => onChange(e)}
              >
       <option value=''></option>
      <option value='Weekdays'>Weekdays</option>
      <option value='Daily'>Daily</option>
      <option value='Weekends'>Weekends</option>
      <option value='Weekly'>Weekly</option>
      <option value='Monthly' >Monthly</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div></Grid>

      <Box mt={3}></Box>
<Grid item xs={12}>
<div className='w-full  mb-6 md:mb-0'>
            <label
              className='block tracking-wide text-gray-500 text-sm mb-2'
              htmlFor='grid-state'
            >
              If weekly, choose the day
            </label>
            <div className='relative'>
              <select
                className='appearance-none block w-full text-gray-700 border border-gray-400 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                name='day'
                value={day}
                onChange={(e) => onChange(e)}
              >
           <option value='none'></option>
      <option value='Sunday'>Sunday</option>
      <option value='Monday'>Monday</option>
      <option value='Tuesday'>Tuesday</option>
      <option value='Wednesday'>Wednesday</option>
      <option value='Thursday'>Thursday</option>
      <option value='Friday'>Friday</option>
      <option value='Saturday'>Saturday</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
            </div>
      </Grid>

      <Box mt={2}></Box>
      <label
              className='block tracking-wide text-gray-500 text-sm mb-2'
              htmlFor='grid-state'
            >
              If monthly, choose the date
            </label>

            <TextField
 onChange={e=>onChange(e)}
    variant="outlined"
    margin="normal"
    fullWidth
    id="date"
    label="Available Date"
    type="date"
    clearable
    name="date"
    value={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />


<Box mt={2}></Box>
<Typography component="h7" variant="h8"  className={classes.typo}>
Available Time
</Typography>

<Grid container>
<Grid item xs={6}>
<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              fullWidth
              
              id="timeFrom"
              label="From"
              name="timeFrom"
              value={timeFrom}
            />  
        </Grid>
        <Grid item xs={6}>
        <TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              fullWidth
              
              id="timeTo"
              label="To"
              name="timeTo"
              value={timeTo}
            />  
        </Grid>
        </Grid>


  <Box mt={1}></Box>

 
        <Box mt={3}></Box>


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

TreatmentMaking.propTypes={
  setAlert:PropTypes.func.isRequired,
  createTreatments:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  getProfilebyID:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired
};

const mapStateToProps=state=>({
  auth:state.auth,
 
  profile:state.profile
})

export default connect(mapStateToProps, { setAlert,createTreatments,getProfilebyID })(TreatmentMaking);