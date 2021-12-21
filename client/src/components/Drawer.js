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
  

  useEffect(()=>{
    if(event != null) {
      fetch(`http://localhost:5000/${bur}`)
      .then(response => 
          //console.log(response.json())
        response.json())
      .then(data =>{
            console.log(">>>",data)
           setCoords(data)
           setEvent(null)
          
          }
           
           )
    }

},[bur,event])
  const handleOnClick = (e) => {
    console.log(e);
    setEvent(e);
    


    }

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
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
        <Button variant="outlined" size='medium' onClick= {handleOnClick}>Search</Button>
        {/* <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Map location={location} zoomLevel={10} coords={coords}/>
      </Box>
    </Box>
  );
}