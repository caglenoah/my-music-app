
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import BasicSelect from './Select';





export default function SoundQuality(props) {

    return (

        <Card sx={{
            maxWidth: 275,
            border: '1px solid gray'
        }}>
            <CardContent>
                <Typography variant="h5" component="div">
                Sound Quality 
                </Typography>
                <Typography variant="body2">
                Manually control the music quality in even of poor connection
                </Typography>
            </CardContent>
            <CardActions>
                <BasicSelect onchange={(e) => {
                   props.setQuality(+e.target.value)
              }}></BasicSelect>
        
            </CardActions>
        </Card>
    );
}