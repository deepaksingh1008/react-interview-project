import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="" alt="Simulanis Logo" />
            </div>
            <nav className="header-nav">
                <select name="" id="">
                    <option href="#products">Products</option>
                </select>
                <select name="" id="">
                    <option href="#solutions">Solutions</option>
                </select>
                <a href="#company">Company</a>
            </nav>
            <button className="header-button">Book a Meeting</button>
        </header>
    );
};

export default Header;
