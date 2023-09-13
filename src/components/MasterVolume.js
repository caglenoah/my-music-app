import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
  }
  
  
  
  
export default function MasterVolume(props) {
  
  return (
    
    <Card sx={{
      maxWidth: 275,
      border: '1px solid gray'
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other system sound settings in the application.
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: 300 }}>
          <Slider onChange={(e) => {
            props.setVolume(+e.target.value)
          } }
            aria-label="Volume Control"
            defaultValue={20}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
        
          />
        </Box>
      </CardActions>
    </Card>
  );
}
