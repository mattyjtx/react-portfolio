import * as React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import { useState } from "react";


function Home() {
    return(
        <>
            <Navbar className= 'sticky-nav'>
                </Navbar><br></br>
            <Header />
        </>
    );

}

export default Home;