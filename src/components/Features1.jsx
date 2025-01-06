import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import Brush from './images/Highlighter.png';

export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1, background: 'linear-gradient(45deg, #D297A2 30%, #F0BDC5 90%)',}}>
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
              <img src={Brush} alt='The Ontology Highlighter brush' style={{ maxWidth: '50%'}} />            
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
            }}>
                <Typography variant="h3" sx={{ fontFamily: 'Goodly',}} >Discover<br />Ontology:</Typography>
                <Typography variant='subtitle1' sx={{ }}>Explore our premium makeup brush set, crafted with precision and elegance. Dive into the world of flawless application and unlock the secrets of professional-grade artistry.</Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center'}}>
                    <Button variant="contained"  sx={{ backgroundColor: '#fd6687', color: '#FFCCE0',}} >Shop Now</Button>
                    <Button variant="contained"  sx={{ backgroundColor: '#F4BCC1', color: '#533E40',}} >Learn More</Button>

                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }