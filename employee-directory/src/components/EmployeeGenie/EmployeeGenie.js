import React,{ Component } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable.js'
import  getEmployees from '../../utils/API';
import SearchArea from '../SearchArea/SearchArea'
export default class EmployeeGenie extends Component {
    state = {
        employees: [],
        query: " "
    };

     async componentDidMount()  {
        const employeeData = await getEmployees();
        this.setState({
            employees: employeeData.data.results
        })

        return this.state.employees
        };

        handleInputChange = (e) => {
            console.log('we"re typing', e.target.value)
            this.setState({ search: e.target.value });
        };
        searchFunction = (e) => {
            e.preventDefault();
            console.log(this.state.query);
        }
    render(){
    return(
        <>
        <SearchArea search={this.state.query}
        // Fix Search Bar
                    // onChange={this.handleInputChange}
                    // onClick={this.searchFunction}    
                    />
        <EmployeeTable employees={this.state.employees}/>
        </>
    );
    }
}

