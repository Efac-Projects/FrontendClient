import React from 'react'
import PropTypes from 'prop-types'
import {GoogleMap ,withScriptjs,withGoogleMap ,Marker} from 'react-google-maps'


export default function MapItem(props)     {

const displayLocation =(props)=>{
    const {menu,locationData}=props

    if(locationData){

        return (
           locationData.map((location,index)=>{

            console.log(location);

return(
<Marker
key={locationData.businessId}
position={{lat:locationData.lat,
lng:locationData.lng

}}

/>
)

           })
        )
}else {
    return(<div></div>)
}

}
return(

    <>
    {displayLocation(props)}
    </>
)

}


