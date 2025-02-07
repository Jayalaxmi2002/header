import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Justdial</div>
            <div className="search-bar">
                <input type="text" placeholder="Search across '4.7 Crore+' Businesses" />
                <button>Search</button>
            </div>
            <div className="location">Bettuli, Korwor</div>
        </header>
    );
};

export default Header;