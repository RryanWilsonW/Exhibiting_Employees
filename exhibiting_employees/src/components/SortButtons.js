import React from 'react';

const SortButtons = (props) => {
    return (
        <div className='sortButton'>
            <p>Sort:</p>
            <button
            onClick={props.sortNameAcs}>Name Acending</button>
            <button
            onClick={props.sortNameDec}>Name Decending</button>


        </div>
    )
}

export default SortButtons;