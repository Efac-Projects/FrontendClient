import axios from 'axios';
import { setAlert } from './alert';

import {
 GET_TREATMENT,
 TREATMENT_ERROR,
 GET_TREATMENTS,
} from './types'

//Get all treatments

export const  getTreatments=()=>async dispatch=>{
 
    try {
        const res= await axios.get('https://localhost:5001/api/threatment')
    
        dispatch({
            type:GET_TREATMENTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:TREATMENT_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
    
    }

    //Get  treatment by id

export const  getTreatmentbyID=(businessId)=>async dispatch=>{

  

    try {
        const res= await axios.get(`https://localhost:5001/api/Threatment/${businessId}`)
    
        dispatch({
            type:GET_TREATMENT,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:TREATMENT_ERROR,
            payload:'error'
        })
    }
    
    }

     //create treatments


     export const createTreatments=(formData,history,businessId)=>async dispatch=>{
        try {
      
          const config={
            headers:{
              'Content-Type':'application/json'
            }
          }
          const res = await axios.post(`https://localhost:5001/api/Threatment/${businessId}`, formData,config);
      
          dispatch({
            type:GET_TREATMENT,
            payload: res.data
          });
      
          dispatch(setAlert('Treatment Added  Successfully', 'success'));
      
        
            history.push(`/businessess`);
          
        } catch (err) {
          const errors =err.response.data.errors;
      
          if (errors) {
            dispatch(setAlert('Something Went Wrong.Try Again', 'danger'));
          }
      
          dispatch({
            type: TREATMENT_ERROR,
            payload: "Something Went Wrong.Try Again"
          });
        }
      }