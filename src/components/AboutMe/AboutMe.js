
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './AboutMe.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import myphoto from '..//..//assets//images/pfp.jpg'




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#90caf9',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AboutMe() {
    return (
      
<>
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop: "120px"}} >
 
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} /> */}
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={7} md={7} sm={5} style={{height: "560px"}}>
          <Item className='about-me'>    
             <div className='left-grid'>
          <h2>About Me</h2>
          <p>
            Hi! My name is Matthew Gonzales and im a full stack developer
          . I just completed my certification in University of Arizona's coding
            bootcamp and learning HTML, CSS, Javascript, React & more. My hobbies
            include making music, reading manga, and playing video games.
          </p>
          <ul class="list-group">
            <li class="list-group-item">Birthday: 10/3/92</li>
            <li class="list-group-item">City: Odessa,TX</li>
            <li class="list-group-item">Freelance: Available</li>
            <li class="list-group-item">Tech used: HTML & CSS, Javascript, React, Node.js </li>
            
          </ul>
          
        </div>
        </Item>
        </Grid>
        <Grid item xs={5} md={5} sm={5} style={{height: "560px"}}>
          <Item className='profile-pic'>
            <img src={myphoto} alt="frappo"/>
          </Item>
        </Grid>
 
      </Grid>
    </Box>
      </Container>
    </React.Fragment>

</>

    );
  }
  
  export default AboutMe;