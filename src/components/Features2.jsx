import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import Brush from './images/EyeBrushes.png';

export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1, background: 'linear-gradient(45deg, #D297A2 30%, #F0BDC5 90%)',}}>
        <Grid container spacing={0} sx={{ height: '100%'}}>
          <Grid size={{xs: 12, md: 6}}>
          <Box sx={{ 
                px: '20%',
                mb: '100px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start', // Aligns content to the left
                gap: 2, // Adds spacing between child elements
                background: '#151515',
                borderRadius: 4,
            }}>
                <Typography variant="h3" sx={{ fontFamily: 'Goodly', color: '#F67CAB'}} >Elevate Your<br />Look</Typography>
                <Typography variant='subtitle1' sx={{ color: '#5B5A59'}}>Indulge in the luxurious touch of our gloss black makeup brushes. Designed to effortlessly blend and sculpt, each brush is a masterpiece of form and function.</Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center'}}>
                    <Button variant="contained"  sx={{ backgroundColor: '#fd6687', color: '#862944', borderRadius: 4,}} >Explore</Button>
                    <Button variant="outlined"  sx={{ borderColor: '#5B5A59', color: '#5B5A59',}} >Shop</Button>

                </Box>
            </Box>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
          <Box
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                <img src={Brush} alt='The Ontology eye brushes' style={{ maxWidth: '100%', maxHeight: '550px' }} />
            </Box>
            
        
          </Grid>
        </Grid>
      </Box>
    );
  }