import React from 'react';
import '../styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Employee Directory</h1>
            <p className='intro'>Narrow results with search bar or sort alphabetically.</p>
        </div>
    );
};

export default Header;