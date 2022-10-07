import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="main-container">
                <div className="logo">
                    <img src={logo} className="logo-img" alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;