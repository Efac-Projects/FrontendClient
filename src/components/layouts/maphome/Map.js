import React,{useState, useEffect, useCallback, useRef} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Spinner from '../Spinner'

const libraries=["places"];

const mapContainerStyle={
    width:'99vw',
    height:'100vh',
}
const center = {
  lat:8.04,
  lng:80.633728
  
};

function Map() {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCzTCpl9JjaAFIoTXeEgtHrzR62utfeyII",
    libraries
  })

  const [map, setMap] = React.useState(null)

  const mapRef = useRef();
  const onMapLoad= useCallback(
      (map) => {
          mapRef.current=map;
      },
      [],
  )

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true)

  const locate = () => {
   
    fetch(`https://localhost:5001/api/business/`)
      .then(res => {
          return res.json();})
          .then((data)=>{
        console.log(data);
         
setLocationData(data)
setLoading(false)
          })
        
          .catch(err => {
            console.log(err);
          }); 
        
        }

          useEffect(() => {
           locate();
          
          }, []);
if (loading) return (
    <Spinner/>
)

  return isLoaded ? (
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
      >
        {
         locationData.map((location)=>(
            <Marker key={location.businessId} 
            position={{lat:parseFloat(location.lat),
           lng:parseFloat(location.lng)
           }}
            />
        ))
}
        <></>
      </GoogleMap>
  ) : <>Error Loading Map</>
}

export default Map