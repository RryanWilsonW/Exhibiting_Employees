import React from 'react';
import '../styles/card.css';

const EmployeeCard = (props) => {
    return (
        <div className='empCards'>
            <div className='imgContainer'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='content'>
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Phone Number:</strong> {props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                        <strong>Age:</strong> {props.age}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default EmployeeCard;