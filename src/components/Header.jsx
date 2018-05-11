import React from 'react';
import logo from '../logo.svg';

const Header = () => (
    <header className="Header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Application Users List</h1>
    </header>
)
 
export default Header;