import React from 'react';
import { Button } from '../Button/Button';
import { MenuItems } from './MenuItems';
import './Navbar.css'



export default function Navbar() {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>hello <i className='fa-solid fa-code'></i></h1>
            <div className='menu-icon'>

            </div>
            <ul className='nav-menu'>
                {MenuItems.map((item, index) =>  {
                    return (
                        <li key={index}><a className={item.cName} href={item.URL}>{item.title}</a></li>
                    )
                })}
                
            </ul>
            <Button>Download Resume</Button>
        </nav>
    )
}