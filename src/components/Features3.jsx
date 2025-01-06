import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import Brush from './images/FaceBrushes.png';

export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1, background: 'linear-gradient(45deg, #E7B8C1 30%, #DEA6B0 90%)',}}>
        <Grid container spacing={0} sx={{ height: '100%'}}>
          <Grid size={{xs: 12, md: 6}}>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <img src={Brush} alt='The Ontology face brushes' style={{ maxWidth: '100%', maxHeight: '550px' }} />
                </Box>
          </Grid>
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
                    background: '#0E0F0D',
                    borderRadius: 4,
                }}>
                    <Typography variant="h3" sx={{ fontFamily: 'Goodly', color: '#F67CAB'}} >Artistry Unveiled<br />Look</Typography>
                    <Typography variant='subtitle1' sx={{ color: '#5B5A59'}}>Uncover the transformative power of our makeup brush collection. Elevate your beauty routine with tools that redefine precision and performance</Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center'}}>
                        <Button variant="contained"  sx={{ backgroundColor: '#fd6687', color: '#862944', borderRadius: 4,}} >Buy Now</Button>
                    </Box>
            </Box>
          
            
        
          </Grid>
        </Grid>
      </Box>
    );
  }