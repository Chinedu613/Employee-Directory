
import './App.css';
import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import NavBar from './components/NavBar/NavBar';
import SearchArea from './components/SearchArea/SearchArea';
import Wrapper from './components/Wrapper/index';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import employees from './employee.json';

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employees
  };
  
  render() {
    return (
<div>
<NavBar />
  <Wrapper>
  <SearchArea />
    <EmployeeTable>
   {this.state.employees.map(oneEmployee => ( 
      <EmployeeCard 
        key={oneEmployee.id.value} 
        firstName={oneEmployee.name.first} 
        lastName={oneEmployee.name.last} 
        picture={oneEmployee.picture.medium} 
        email={oneEmployee.email} 
        phone={oneEmployee.phone} 
        />))}
    </EmployeeTable>
  </Wrapper>
</div>
  );
}
}

export default App;
