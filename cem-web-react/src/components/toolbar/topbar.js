import React from 'react';
import './topbar.css';
import Navbar from '../navbar/navbar';

const TopBar = () => {
    return (
        <div className="top-bar">
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <Navbar/>
        </div>
    );
};

export default TopBar;
