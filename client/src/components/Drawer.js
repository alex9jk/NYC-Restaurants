import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Map from './map/map';
import BasicSelect from './Select';
import { useNavigate } from 'react-router-dom';
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
  const [event,setEvent] =useState(null)
  const navigate = useNavigate();
  

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
    console.log("BUR in onclick", bur)
    fetch(`http://localhost:5000/${bur}`)
       .then(response => 
         //console.log(response.json()))
        response.json())
      .then(data =>{
            console.log(">>>",data)
           setCoords(data)
      })
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
        <Button variant="outlined" size='medium' onClick= {async () =>{await handleOnClick()}}>Search</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          {console.log("COORDS",coords)}
        <Map location={location} zoomLevel={10} coords={coords}/>
      </Box>
    </Box>
  );
}