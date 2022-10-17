import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user , logOut ,setUser } = useContext(AuthContext)

    const handleSignOut=()=>{
        logOut()
        .then((result)=>{
            setUser(null)
            console.log('log out successfull')
        })
        .catch((error)=>{
            console.error(error);
        })
    }

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
                        {
                            user?.uid ? <button onClick={handleSignOut}>Sign Out</button> :
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;