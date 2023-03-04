import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/Orders">Orders</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;