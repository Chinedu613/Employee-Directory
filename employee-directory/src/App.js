
import './App.css';
import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import Header from './components/Header';
import Wrapper from './components/Wrapper/index';
import EmployeeTable from './components/EmployeeTable';

import employees from './employee.json';

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employees
  };
  
  render() {
    return (
<div>
<Header />
  <Wrapper>
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
