import React from 'react';
import '../styles/search.css'
const Search = () => {
    return (
        <div className='searchBar'>
            <form className='form'>
                <input className='inputBar'>
                </input>
                <button className='search-button'>Search</button>
            </form>
        </div>
    )
} 

export default Search;