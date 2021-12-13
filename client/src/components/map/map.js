import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'



const Map = ({ location, zoomLevel }) => {
  const [keyFob,setKey] = useState('');
  useEffect(() =>{
    fetch("http://localhost:5000/key")
    .then(response => 
        //console.log(response.json())
      response.json())
    .then(data =>{
         setKey(data.key)})
  },[])
  return (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: keyFob }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  </div>
)}
export default Map;