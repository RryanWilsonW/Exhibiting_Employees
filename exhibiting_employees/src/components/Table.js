import React, { Component } from 'react';
import API from '../utils/API';
import '../styles/card.css';

class Employee extends Component {
    state = {
            search: '',
            employees: [],
            employeeFiltered: [],
            sortPirameters: this.sortPirams,
        };

    get sortPirams () {
        return {
            name: '',
            phone: '',
            email: '',
            dob: '',
        };
    }

    componentDidMount() {
        API.getEmployees()
        .then((res) => 
            this.state({
                employees: res.data.results,
                employeeFiltered: res.data.results
            })
        )
        .catch((err) => console.log(err));
    }
}
const EmployeeCard = (props) => {
    return (
        <div className='card'>
            <div className='imgContainer'>
                <img alt={props.name} src={props.img} />
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
                        <strong>DOB:</strong> {props.dob}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default EmployeeCard;