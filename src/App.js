import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ButtonAppBar from './components/AppBar';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {lightBlue} from '@mui/material/colors'
import Portfolio from './components/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
    <>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    {/* <Navbar />
    <h1 className='title-name' >Matt Gonzales</h1>
<Header /> */}
    <Route path='/Header' element={<Header />}></Route>
    </Routes>
    </>
    </Router>
  );
}

export default App;
