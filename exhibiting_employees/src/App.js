import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/EmployeeCard';
import Search from './components/Search';
import './styles/app.css';
import API from './utils/API';
import React, { Component } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

export default class App extends Component {
  state = { 
    results: [], 
    search:'', 
    filteredResults: [],
    order: ''  
  };

  handleInputChange= event => {
    const results = this.state.results;
    const UserInput = event.target.value;
    const filterE = results.filter(f => f.name.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    )
    this.setState({
      filteredResults: filterE
    })
  }

  componentDidMount = () => {
    console.log(API.getEmployees())
    API.getEmployees()
      .then((records) => {
        let data = records.data.results;
        let employeeData = [];
        for (let i = 0; i < data.length; i++) {
          let card = {
            id: i,
            firstName:data[i].name.first,
            name: data[i].name.first + " " + data[i].name.last,
            email: data[i].email,
            image: data[i].picture.medium,
            phone: data[i].cell,
            dob: data[i].dob.date,
          };
          employeeData.push(card);
        }
        this.setState({ results: employeeData });
        this.setState({ filteredResults: employeeData})
      });
  };


  render() {
    return (
      <div className='app'>
        <Wrapper>
          <Header />
          <Search 
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}
            result={this.state.results}
          />
          {this.state.filteredResults.map(e => (
            <EmployeeCard 
            key={e.name + e.id}
            name={e.name}
            email={e.email}
            image={e.image}
            phone={e.phone}
            dob={e.dob}/>
          ))}
        </Wrapper>
      </div>
    );  
  }
}
