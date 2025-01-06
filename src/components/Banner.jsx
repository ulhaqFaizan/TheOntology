import * as React from 'react';
import Box from '@mui/material/Box';
import Banner from './images/Banner.png';

export default function BoxSx() {
  return (
      <Box
        sx={{
          // height: 900,
        }}
      >
        <img src={Banner} alt='The Ontology Makeup Brushes' style={{ maxWidth: '100%' }} />      
      </Box>
  );
}
