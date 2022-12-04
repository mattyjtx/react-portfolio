import * as React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import { useState } from "react";
import AboutMe from '../../components/AboutMe/AboutMe';


function Home() {
    return(
        <>
            <Navbar className= 'sticky-nav'>
                </Navbar>
                <br></br>
            <AboutMe />
        </>
    );

}

export default Home;