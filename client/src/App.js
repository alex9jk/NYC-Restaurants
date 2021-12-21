import React,{useEffect,useState} from 'react';
import Map from './components/map/map';
import ButtonAppBar from './components/ButtonAppBar';
import PermanentDrawerLeft from './components/Drawer';

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
    <>
    <ButtonAppBar/>
    <PermanentDrawerLeft />
    {/* <div>
      <Map location={location} zoomLevel={10}/>
    </div> */}
    </>
  )

}

export default App;