import axios from 'axios'
import React from 'react'
import { setAlert } from './alert';


import {
GET_CONTACT,
CRAETE_CONTACT,
CONTACT_ERROR,
DELETE_CONTACT
} from './types'




//Get all contact

export const  getContacts=()=>async dispatch=>{
 
  try {
      const res= await axios.get('https://localhost:5001/api/contactus')
  
      dispatch({
          type:GET_CONTACT,
          payload:res.data
      })
  } catch (err) {
      dispatch({
          type:CONTACT_ERROR,
          payload:{msg:err.response.statusText,status:err.response.status}
      })
  }
  
  }





//Delete contact

export const deleteContact=(contactId,history)=>async dispatch=>{
  try {
    const res=await axios.delete(`https://localhost:5001/api/contactus/${contactId}`)

    dispatch({
      type:DELETE_CONTACT,
      payload:res.data

    })

    dispatch(setAlert('Message Removed','success'));
   

  } catch (err) {
    dispatch({
      type:CONTACT_ERROR,
      payload:{ msg: err.response.statusText, status: err.response.status}
    })
  }
}






//create contact


export const createContact = (
  formData,
  history,
) => async dispatch => {
  try {

    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await axios.post('https://localhost:5001/api/contactus', formData,config);

    dispatch({
      type: CRAETE_CONTACT,
      payload: res.data
    });

    dispatch(setAlert( 'Thank you for contacting us' ,'success',<i className="material-icons">done</i>));
    history.push('/');
  } catch (err) {
    const errors =err.response.data.errors;

    if (errors) {
    dispatch(setAlert(errors,'danger',  <i className="material-icons">report</i>));
    }

    dispatch({
      type: CONTACT_ERROR,
      payload: "somthing went wrong"
    });
  }
};