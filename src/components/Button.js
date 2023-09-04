import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Button className='main-btn' variant="text" onClick={() => console.log("Clicked")}>Text</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}