
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

    <EmployeeGenie />


  </Wrapper>
</div>
  );
}
}

export default App;
