import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

}));


function AppointmentIdItem({appointment:{
   
  appointmentId,
  businessId,
  firstName,
  lastName,
  phoneNumber,
createdAt,
  age,
  gender,
  start
  

}}) 

{

  const classes = useStyles();



  return (

<div
className={classes.root}
>

    <body className=" flex justify-center mb-6 items-center">
    <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="bg-gray-200  text-blue-700 text-lg px-6 py-4"> Appointment :{appointmentId} <div classNameName='text-pink-700 text-xs'> Created at: {createdAt}</div></div>
  
      <div className="flex justify-between items-center px-6 py-4">
        <div className="bg-red-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Review</div>
        <div className="text-sm">{start}</div>
      </div>
  
      <div className="px-6 py-4 border rounded-lg border-gray-200">
        <div className=" p-2 bg-gray-200">
         Name: {firstName} { lastName}
        </div>

        <div className=" p-2 bg-gray-200">
         Age: {age}
        </div>

        <div className=" p-2 bg-gray-200">
        Gender: {gender}
        </div>
        
        <div className=" p-2 bg-gray-200">
         Phone Number: {phoneNumber}
        </div>
      </div>
  
      <div className="bg--200 px-6 py-2">
     
  
        <div className="flex items-center ">
        <button className="block mb-4 px-3 py-2 text-xs font-bold rounded-full no-underline hover:shadow bg-blue-600 text-white"><Link to={`/confirm/appoint/${appointmentId}`}>
          Confirm Appointment</Link></button>
        
        </div>
      </div>
    </div>
  </body>
  </div>
  );
}

AppointmentIdItem.propTypes = {
  appointment:PropTypes.array.isRequired,
  }
  
  
  export default AppointmentIdItem