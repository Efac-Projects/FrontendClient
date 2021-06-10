import axios from 'axios';
import { setAlert } from './alert';


import {
 GET_APPOINTMENT,
 APPOINTMENT_ERROR,
 GET_APPOINTMENTS,
} from './types'

//Get all appointments

export const  getAppointments=()=>async dispatch=>{
 
    try {
        const res= await axios.get('https://localhost:5001/api/Appoinment')
    
        dispatch({
            type:GET_APPOINTMENTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:APPOINTMENT_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
    
    }


    //create appointments


    export const createAppointments=(formData,history,businessId)=>async dispatch=>{
        try {
      
          const config={
            headers:{
              'Content-Type':'application/json'
            }
          }
          const res = await axios.post(`https://localhost:5001/api/Appoinment/${businessId}`, formData,config);
      
          dispatch({
            type:GET_APPOINTMENT,
            payload: res.data
          });
      
          dispatch(setAlert('Appointment Added  Successfully', 'success'));
      
        
            history.push(`/businessess`);
          
        } catch (err) {
          const errors =err.response.data.errors;
      
          if (errors) {
            dispatch(setAlert('Something Went Wrong.Try Again', 'danger'));
          }
      
          dispatch({
            type: APPOINTMENT_ERROR,
            payload: "Something Went Wrong.Try Again"
          });
        }
      }

    //Get  appointment by id

export const  getAppointmentbyID=(businessId)=>async dispatch=>{

  

    try {
        const res= await axios.get(`https://localhost:5001/api/appoinment/${businessId}`)
    
        dispatch({
            type:GET_APPOINTMENT,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:APPOINTMENT_ERROR,
            payload:'error'
        })
    }
    
    }

    //gET THE CURRENT USERS PROFILE

export const  getCurrentAppointment=(businessId)=>async dispatch=>{

    try {
        const res= await axios.get(`https://localhost:5001/api/appoinment/${businessId}`)
    
        dispatch({
            type:GET_APPOINTMENT,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:APPOINTMENT_ERROR,
            payload:'errors'
        })
    }
    
    }

