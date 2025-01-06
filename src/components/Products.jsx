import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import img1 from './images/lifeStyle1.jpeg';
import img2 from './images/lifeStyle2.jpeg';
import img3 from './images/EyeBrushes1.png';

export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1, background: '#E25174', p: '10%'}}>
        <Grid container spacing={8} sx={{ height: '100%'}}>
          <Grid size={{ xs: 12, md: 4}}>
            <Box
                sx={{
                    // height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#F98C9A'
                }}
                >
                <img src={img1} alt='' style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4}}>
            <Box
                sx={{
                    // height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(45deg, #DEA3AE 30%, #E28B98 90%)'
                }}
                >
                <img src={img3} alt='' style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', }} />
                </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4}}>
            <Box
                sx={{
                    // height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(45deg, #E38492 30%, #D46274 90%)'
                }}
                >
                <img src={img2} alt='' style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }