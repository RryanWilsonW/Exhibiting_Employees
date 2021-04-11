import React from 'react';
import '../styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Employee Directory</h1>
            <p className='intro'>Click on carrots to filter by brackets 
            or use the search box to narrow results.</p>
        </div>
    );
};

export default Header;