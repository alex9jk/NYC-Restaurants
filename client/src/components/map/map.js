import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import CircularIndeterminate from '../utils/Spinner';
import LocationPin from './Pin';
import RestPin from './RestPin';

const Map = ({ location,restData, zoomLevel, coords }) => {
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

      {restData.map(ele => {
        console.log("<<<<<",ele.address.coord[1])
        console.log("<<<<<",ele.address.coord[0])
        return <RestPin lat={ele?.address?.coord[1]} lng={ele?.address?.coord[0]}/>
      })}
    </GoogleMapReact>
      :
      <CircularIndeterminate/>
    }
      
    </div>
  </div>
)}
export default Map;