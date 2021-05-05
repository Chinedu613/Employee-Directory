
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchArea from './components/SearchArea/SearchArea';
import Wrapper from './components/Wrapper/index';
import EmployeeGenie from './components/EmployeeGenie/EmployeeGenie';



class App extends Component {
  // Setting this.state.employee to the employee json array

  
  render() {
    return (
<div>
<NavBar />
  <Wrapper>
  <SearchArea />

    <EmployeeGenie>
  {/*  {this.state.employees.map(oneEmployee => ( 
      <EmployeeCard 
        key={oneEmployee.id.value} 
        firstName={oneEmployee.name.first} 
        lastName={oneEmployee.name.last} 
        picture={oneEmployee.picture.medium} 
        email={oneEmployee.email} 
        phone={oneEmployee.phone} 
        />))} */}
    </EmployeeGenie>
  </Wrapper>
</div>
  );
}
}

export default App;
