import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({burough,setBurough}) {
  // const [age, setAge] = useState('');

  const handleChange = (event) => {
    setBurough(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, padding:10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose a Burough</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={burough}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"brook"}>Brooklyn</MenuItem>
          <MenuItem value={"man"}>Manhattan</MenuItem>
          <MenuItem value={"queens"}>Queens</MenuItem>
          <MenuItem value={"bronx"}>Bronx</MenuItem>
          <MenuItem value={"stat"}>Staten Island</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}