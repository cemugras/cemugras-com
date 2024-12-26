import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/tr" className="language-link">Türkçe</Link>
            <Link to="/en" className="language-link">English</Link>
        </div>
    );
};

export default Navbar;
