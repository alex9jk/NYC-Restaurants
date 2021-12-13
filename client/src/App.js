import React,{useEffect,useState} from 'react';
import Map from './components/map/map';
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
function App() {
  const [dataB, setData] = useState([]);
  // useEffect(()=>{
  //   try {
  //     fetch("http://localhost:5000/restaurants")
  //     .then(response => 
  //       //console.log(response.json())
  //       response.json())
  //     .then(data =>{
  //       let dataB = JSON.stringify(data,null,2)
  //       console.log(">>>",dataB)
  //       setData(data)})
  //   }
  //   catch(err){
  //     console.log(err)}

  // },[])
  return (
    <div>
      <Map location={location} zoomLevel={17}/>
    </div>
    // <div>
    //   {(typeof dataB ==='undefined') ? (<p>Loading...</p>): (<p>{dataB[0].cuisine}</p>)}

    // </div>
  )
}

export default App;