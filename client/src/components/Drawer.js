import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Map from './map/map';
import BasicSelect from './Select';
import {useState,useEffect, useMemo} from 'react';
import RestCard from './Card';
import BasicList from './List';
import CircularIndeterminate from './utils/Spinner';
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 40.695067,
  lng: -74.012686,
}

const drawerWidth = 400;

export default function PermanentDrawerLeft() {
  const [bur, setBur] = useState('man');
  const [coords,setCoords]= useState(null);
  const [restData,setRestData] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() =>{
  setLoading(true)
  setCoords(null)
    fetch(`http://localhost:5000/${bur}`)
    .then(response => response.json())
    .then(data =>{
      console.log("coordinates>>>", data)
      setCoords(data)
      setLoading(false)
      })

  

},[bur])
//   useEffect(()=>{
//     
//       console.log(">>>bur",bur);
//       fetch(`http://localhost:5000/${bur}`)
//       .then(response => 
//           //console.log(response.json())
//         response.json())
//       .then(data =>{
//             console.log(">>>",data)
//            setCoords(data)
//            setEvent(null)
          
//           }
           
//            )
//     

// },[bur,event])

  const handleOnClick = (e) => {
    e.preventDefault()
    setRestData([]);
    
    setLoading(true);
    fetch(`http://localhost:5000/geo?lat=${coords.lat}&long=${coords.long}`,{headers: {"Access-Control-Allow-Origin": "*"}})
      .then(response=> response.json())
      .then(data =>{
        console.log("restaurant data>>>",data);
        setRestData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    

    // console.log("BUR in onclick", bur)
    // fetch(`http://localhost:5000/${bur}`)
    // .then(response => response.json())
    // .then(data =>{
    //   setCoords(data)
    //   fetch(`http://localhost:5000/geo?lat=${data.lat}&long=${data.long}`,{headers: {"Access-Control-Allow-Origin": "*"}})
    //   .then(response=> response.json())
    //   .then(data =>{
    //     setRestData(data)
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    }

  
  return (
    loading ? <CircularIndeterminate/>
    :
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          height: 10,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <div>
          <BasicSelect burough={bur} setBurough={setBur}/>
        <Button variant="outlined" size='medium' sx={{width:"5rem"}}onClick= {async (e) =>{await handleOnClick(e)}}>Search</Button>

        </div>

        {
          restData?.map(ele => {
            return <BasicList name={ele?.name} cuisine={ele?.cuisine} address={ele?.address} grades={ele?.grades}/>
            })}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          
        <Map location={location} restData={restData} zoomLevel={10} coords={coords}/>
      </Box>
    </Box>
  );
}