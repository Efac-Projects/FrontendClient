import React from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken';

import {
 GET_COUNT,
 COUNT_ERROR
} from './types'

//Get count

export const  getCount=()=>async dispatch=>{
 
    try {
        const res= await axios.get('https://api.thingspeak.com/channels/1344229/fields/1.json?results=10')
    
        dispatch({
            type:GET_COUNT,
            payload:res.data.feeds
        })
        console.log(res.data.feeds);
    } catch (err) {
        dispatch({
            type:COUNT_ERROR,
            payload:"Something Went Wrong.Try Again"
        })
    }
    
    }
