import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/EmployeeCard';
import Search from './components/Search';
import './styles/app.css';
import API from './utils/API';
import React, { Component } from 'react';
import SortButton from './components/SortButtons';

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
            image: data[i].picture.large,
            phone: data[i].cell,
            dob: data[i].dob.age

          };
          employeeData.push(card);
        }
        this.setState({ results: employeeData });
        this.setState({ filteredResults: employeeData})
      });
  };

  sortNameAcs = event => {
    event.preventDefault();
    const emp = (this.state.filteredResults);
    const nameAcs = emp.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      filteredResults: nameAcs
    })
  }

  sortNameDec = event => {
    event.preventDefault();
    const emp = (this.state.filteredResults);
    const nameDec = emp.sort((a,b) => (a.name > b.name) ? -1 : 1)
    this.setState({
      filteredResults: nameDec
    })

  }

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
          <SortButton
          sortNameAcs = {this.sortNameAcs} 
          sortNameDec = {this.sortNameDec} />
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
