import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {lightBlue} from '@mui/material/colors'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';

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
          {/* <Navbar />
          <h1 className='title-name' >Matt Gonzales</h1>
      <Header /> */}
          <Route path= '/' element={<LandingPage />}></Route>
          <Route path='/Home' element={<Home />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
