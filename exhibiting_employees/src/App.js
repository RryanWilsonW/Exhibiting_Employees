import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/PageBody';
import Search from './components/Search';
import './styles/app.css';
import API from './utils/API';
import React from 'react';

class App extends React.Component {
  state = { result: {}, search:'' }

  componentDidMount = () => {
    API.getEmployees()
      .then((records) => {
        let data = records.data.results;
        let employeeData = [records.data.results];
        for (let i = 0; i < data.length; i++) {
          let card = {
            name: data[i].name.first + " " + data[i].name.last,
            email: data[i].email,
            image: data[i].picture.medium,
            phone: data[i].cell,
            dob: data[i].dob.date,
          };
          employeeData.push(card);
        }
        console.log(employeeData);
        this.setState({ employeeRecords: employeeData });
      });
  };

  getEmployees = query => {}
  render() {
    return (
      <div className='app'>
        <Wrapper>
          <Header />
          <Search />
          {this.state.employeeData.map(employee => (
            <EmployeeCard 
            name={employee.name}
            email={employee.email}/>
          ))}
        </Wrapper>
      </div>
    );  
  }
}

export default App;
