import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className="main-container">
                <div className="logo">
                    <img src={logo} className="logo-img" alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Oreder Review</a></li>
                        <li><a href="/">Manage Inventory</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;