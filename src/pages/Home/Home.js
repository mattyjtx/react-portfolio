import * as React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';


function Home() {
    return(

            <>
                <section>
                <h1>matt gonzales</h1>
                <Link to="/AboutMe">
                <button className='enter-btn'>
                    press me
                </button>
                </Link>
                </section>
                <Outlet />
            </>

    );

}

export default Home;