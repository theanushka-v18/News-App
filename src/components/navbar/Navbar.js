import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styles.css";

const Navbar = () => {
    
    return (
        <div className='navbar'>
            <ul className='navbar-menu'>
                <NavLink to='/'>News Feed</NavLink>
                <NavLink to='/favourites'>Favourites</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
