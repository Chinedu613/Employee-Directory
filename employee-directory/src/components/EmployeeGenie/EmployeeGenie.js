import React,{ Component } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable.js'
import  getEmployees from '../../utils/API';
import SearchArea from '../SearchArea/SearchArea'
export default class EmployeeGenie extends Component {
    state = {
        employees: [],
        query: "",
        employeeFilter: []
    };

     async componentDidMount()  {
        const employeeData = await getEmployees();
        this.setState({
            employees: employeeData.data.results,
            employeeFilter: employeeData.data.results
        })
        };

        handleInputChange = (e) => {
            e.preventDefault();
            console.log('we"re typing', e.target.value)
            this.setState({ query: e.target.value });
            let currentList = [];
            let newList = [];

            if (e.target.value !== '') {
                currentList = this.state.employeeFilter
                console.log(currentList)
                newList = currentList.filter(searchList => {
                    const lowerCase = searchList.name.first.toLowerCase()
                    console.log(lowerCase)
                    const filter = this.state.query.toLowerCase();

                    return (lowerCase.includes(filter));
                });
            } else {
                    console.log(this.state.employees)
                    newList = this.state.employees
                }
                console.log(newList)
            return this.setState({employees: newList})
        };

    render(){
    return(
        <>
        <SearchArea search={this.state.query}
        // Fix Search Bar
                    handleInputChange={this.handleInputChange}
                    onClick={this.searchFunction}    
                    />
        <EmployeeTable employees={this.state.employees}/>
        </>
    );
    }
}

