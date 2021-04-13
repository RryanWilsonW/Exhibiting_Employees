import React from 'react';
import '../styles/sort.css'

const SortButtons = (props) => {
    return (
        <div className='sortButton'>
            <button 
            className ='ascButton'
            onClick={props.sortNameAcs}>Name Acending</button>
            <button
            className ='decButton'
            onClick={props.sortNameDec}>Name Decending</button>


        </div>
    )
}

export default SortButtons;