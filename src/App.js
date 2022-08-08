import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ButtonAppBar from './components/AppBar';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {lightBlue} from '@mui/material/colors'

const color = lightBlue[200]

const theme = createTheme({
  palette: {
    primary: {
      main: '#80cbc4',
      light: '#b2fef7',
      dark: '#4f9a94'
    },
    secondary: {
      main: '#fbe9e7',
      light: '#ffffff',
      dark: '#c8b7b5'
    }
  }
});

function App() {
  return (
    <>
    <Navbar />
<Header />
    </>
  );
}

export default App;