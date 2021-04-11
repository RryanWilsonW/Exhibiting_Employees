import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/EmployeeCard';
import Search from './components/Search';
import './styles/app.css';
import API from './utils/API';
import React, { Component } from 'react';

export default class App extends Component {
  state = { results: [], search:'' }

  componentDidMount = () => {
    console.log(API.getEmployees())
    API.getEmployees()
      .then((records) => {
        console.log(records)
        let data = records.data.results;
        let employeeData = [];
        for (let i = 0; i < data.length; i++) {
          let card = {
            id: i,
            name: data[i].name.first + " " + data[i].name.last,
            email: data[i].email,
            image: data[i].picture.medium,
            phone: data[i].cell,
            dob: data[i].dob.date,
          };
          employeeData.push(card);
          console.log(card)
        }
        this.setState({ results: employeeData });
      });
  };

  render() {
 /*   {console.log(this.state.results.length)}
    if(this.state.results.length = 0) {
      return (
        <Wrapper>
        <Header />
        <Search />
        </Wrapper>
      )
    }
    */
    console.log(this.state.results)
    return (

      <div className='app'>
        <Wrapper>
          <Header />
          <Search />
          {this.state.results.map(e => (
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
