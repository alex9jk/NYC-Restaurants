import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import CircularIndeterminate from '../utils/Spinner';
import LocationPin from './Pin';

const Map = ({ location, zoomLevel, coords }) => {
  const [keyFob,setKey] = useState('');
  useEffect(() =>{
      fetch("http://localhost:5000/key")
    .then(response => 
        //console.log(response.json())
      response.json())
    .then(data =>{
          console.log(">>>",data.key)
         setKey(data.key)})
  },[])
  
  return (
   
  <div className="map">
   

    <div className="google-map">
      
      {keyFob ? 
        <GoogleMapReact
          bootstrapURLKeys={{ key: keyFob }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
      <LocationPin
        lat={coords?.lat}
        lng={coords?.long}
        // text={location.address}
      /> 
    </GoogleMapReact>
      :
      <CircularIndeterminate/>
    }
      
    </div>
  </div>
)}
export default Map;