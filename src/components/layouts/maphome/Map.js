import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import  MapItem from './MapItem'
import Spinner from '../../layouts/Spinner'
import {getProfiles} from '../../../actions/businessprofile'
import {GoogleMap ,withScriptjs,withGoogleMap ,Marker} from 'react-google-maps'
import axios from 'axios'
import { localeData } from 'moment'
import { Business } from '@material-ui/icons'




function MapHome
() {
    const [locationData, setLocationData] = useState([]);


    useEffect(() => {
          
        location()   
 },[])
// eslint-disable-next-line

   const location= () => {
     axios .get(` https://localhost:5001/api/business/`)
          .then(res => {      
const allMaps =res.data

setLocationData(allMaps)


    console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      
    
        }
    return (
    <GoogleMap defaultZoom={8}  
    defaultCenter={{lat:7.8731, lng :80.7718}}>
   
<MapItem locationData={locationData}/>
    </GoogleMap>
    )
    }
    
const WrappedMap=withScriptjs(withGoogleMap(MapHome))

 const Map=( )=>{


return(
 <div style={{width:"100%", height:"100vh"}}>
<WrappedMap googleMapURL={`"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"`}
loadingElement={<div style={{height:"100%"}}/> }
containerElement={<div style={{height:"100%"}}/> }
mapElement={<div style={{height:"100%"}}/> }


/>


</div>

)

 }




export default Map