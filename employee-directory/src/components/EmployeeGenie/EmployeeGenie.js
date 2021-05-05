import React,{ Component } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable.js'
import getRandomEmployee from '../../utils/API';

export default class EmployeeGenie extends Component {
    state = {
        employees: []
    };

     async componentDidMount()  {
        const randomEmployee = await getRandomEmployee();
        this.setState({
            employees: randomEmployee.data.results
        })
        console.log(this.state.employees);
        // console.log(this.state.employees);
        return this.state.employees
        }
        
    render(){
    return(
        <EmployeeTable employees={this.state.employees}/>
    );
    }
}

