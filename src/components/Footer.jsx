import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import logo from './images/logo.png';
import Typography from '@mui/material/Typography';

export default function NestedList() {
    const today = new Date();
  return (

    <Box sx={{ flexGrow: 1, background: '#E25174', py: 10}}>
        <Grid container spacing={2}>
        <Grid size={3}>
            <Box sx= {{
                px: '20%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start', // Aligns content to the left
                gap: 2, // Adds spacing between child elements
            }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mb: 5,}}>
                <img src={logo} alt='The Ontology Logo' style={{ height: 70, }} />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mb: 1,}}>
                <img src={logo} alt='The Ontology Logo' style={{ height: 40, }} />
                </Box>
                <Typography variant='subtitle1' sx={{ color: 'white' }}>© {today.getFullYear()} Ontology, Inc.<br /> All rights reserved.</Typography>
            </Box>
        </Grid>
        <Grid size={3}>
            <List
            sx={{ width: '100%', maxWidth: 360, color: 'white' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: 'transparent', color: 'white'}}>
                Quick Links
                </ListSubheader>
            }
            >
            <ListItemButton>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Contact" />
            </ListItemButton>
            </List>
        </Grid>
        <Grid size={3}>
        <List
            sx={{ width: '100%', maxWidth: 360, color: 'white' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: 'transparent', color: 'white' }}>
                Connect With Us
                </ListSubheader>
            }
            >
            <ListItemButton>
                <ListItemText primary="Instagram" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Tiktok" />
            </ListItemButton>
            </List>
        </Grid>
        <Grid size={3}>
        <List
            sx={{ width: '100%', maxWidth: 360, color: 'white' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={ 
                <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: 'transparent', color: 'white' }}>
                Legal
                </ListSubheader>
            }
            >
            <ListItemButton>
                <ListItemText primary="Terms" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Privacy" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Returns" />
            </ListItemButton>
            </List>
        </Grid>
      </Grid>
    

        
    </Box>
  );
}
