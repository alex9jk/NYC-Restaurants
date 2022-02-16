import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SilverIcon from '@mui/icons-material/Restaurant';
import LocationIcon from '@mui/icons-material/LocationOn';
import CuisineIcon from '@mui/icons-material/Storefront';
import GradeIcon from '@mui/icons-material/Grade'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function BasicList({name,cuisine,address,grades}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',paddingLeft:"1rem" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            
              <ListItemIcon>
                <SilverIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <LocationIcon />
              </ListItemIcon>
              <ListItemText primary={`${address.building} ${address.street} ${address.zipcode}`} />       
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <CuisineIcon />
              </ListItemIcon>
              <ListItemText primary={cuisine} />       
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary={"Grades"} />       
          </ListItem>
          {grades.map(ele =>{
            return <ListItem disablePadding>
                      <Typography component="legend">{}</Typography>
                      <Rating name="read-only" value={ele.score} readOnly />

                  </ListItem>
          })}
        </List>
      </nav>
      <Divider />

    </Box>
  );
}
