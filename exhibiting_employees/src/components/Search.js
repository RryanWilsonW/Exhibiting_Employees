import React from 'react';
import '../styles/search.css'

const Search = (props) => {
    return (
        <div className='searchBar'>
            <form className='form'>
                <input 
                onChange={props.handleInputChange}
                value={props.value}
                name='searchKeyword'
                id='employees'
                type='text'
                list ='employee'
                className = ' inputBox '
                placeholder="Search Employee Name"
                />
            </form>
       </div>
    )
} 

export default Search;