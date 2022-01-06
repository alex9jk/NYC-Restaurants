import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Map from './map/map';
import BasicSelect from './Select';
import {useState,useEffect, useMemo} from 'react';


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 40.695067,
  lng: -74.012686,
}

const drawerWidth = 400;

export default function PermanentDrawerLeft() {
  const [bur, setBur] = useState('');
  const [coords,setCoords]= useState(null);
  const [restData,setRestData] = useState([]);


//   useEffect(()=>{
//     if(event != null) {
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
//     }

// },[bur,event])

  const handleOnClick = (e) => {
    e.preventDefault()
    setRestData([]);
    console.log("BUR in onclick", bur)
    fetch(`http://localhost:5000/${bur}`)
       .then(response => 
         //console.log(response.json()))
        response.json())
      .then(data =>{
            console.log(">>>",data)
           setCoords(data)
           fetch(`http://localhost:5000/geo?lat=${data.lat}&long=${data.long}`,
           {
             headers: {
               "Access-Control-Allow-Origin": "*"
             }
           })
           .then(response=> response.json())
           .then(data =>{
             setRestData(data)
           })
           .catch(error => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
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
        
        <BasicSelect burough={bur} setBurough={setBur}/>
        <Button variant="outlined" size='medium' onClick= {async (e) =>{await handleOnClick(e)}}>Search</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          
        <Map location={location} restData={restData} zoomLevel={10} coords={coords}/>
      </Box>
    </Box>
  );
}