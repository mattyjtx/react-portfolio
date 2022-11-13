import * as React from 'react';
import './LandingPage.css';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


function LandingPage() {
    return(

            <>
                <section>
                <h1>matt gonzales</h1>
                <Link to="/Home">
                <button className='enter-btn'>
                    press me
                </button>
                </Link>
                </section>
                <Outlet />
            </>

    );

}

export default LandingPage;