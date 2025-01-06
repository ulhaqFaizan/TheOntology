import * as React from 'react';
import Box from '@mui/material/Box';
import Banner from './images/Banner.png';

export default function BoxSx() {
  return (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // For vertical alignment, if needed
        height: '100%',       // Parent height for vertical alignment
      }}
      >
        <Box
          component="img"
          src={Banner}
          alt="The Ontology Makeup Brushes"
          sx={{
            width: {
              xs: '100%', // 100% width for extra-small screens
              sm: '80%',  // 80% width for small screens
              md: '50%',  // 60% width for medium screens
            },
            height: 'auto', // Maintain aspect ratio
          }}
          />
      </Box>
      
  );
}
