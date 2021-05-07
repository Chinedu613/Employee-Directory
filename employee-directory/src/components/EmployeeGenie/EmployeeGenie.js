import React,{ Component } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable.js'
import  getEmployees from '../../utils/API';
import SearchArea from '../SearchArea/SearchArea'


export default class EmployeeGenie extends Component {
    // Set the State
    state = {
        employees: [],
        query: "",
        employeeFilter: [],
        currentSort: 'default'
    };

 

    async componentDidMount()  {
        const employeeData = await getEmployees();
        this.setState({
            employees: employeeData.data.results,
            employeeFilter: employeeData.data.results
        })
        };
        // Handles Search
        handleInputChange = (e) => {
            e.preventDefault();
            this.setState({ query: e.target.value });
            let currentList = [];
            let newList = [];

            if (e.target.value !== '') {
                currentList = this.state.employeeFilter
                newList = currentList.filter(searchList => {
                    const lowerCase = searchList.name.first.toLowerCase()
                    const filter = this.state.query.toLowerCase();

                    return (lowerCase.includes(filter));
                });
            } else {
                    newList = this.state.employees
                }
            return this.setState({employees: newList})
        };
 
        // Handles Sorting Asc/Desc
        onSortChange = (e) => {
            e.preventDefault();
            const {currentSort} = this.state;
            let nextSort;
        
            if (currentSort === 'down')  nextSort = 'up';
            else if (currentSort === 'up') nextSort = 'default';
            else if (currentSort === 'default') nextSort = 'down';
        
            this.setState({
                    currentSort: nextSort
                });
        }

        SortDirections = {
    
            up:{
                class: 'sort-up',
                fn: (a, b) => (a.name.last > b.name.last ? 1 : -1)
            },
            down:{
                class: 'sort-down',
                fn: (a, b) => (a.name.last < b.name.last ? 1 : -1)
            },
            default:{
                class: 'fas fa-sort',
                fn: (a, b) => (a.name.last > b.name.last ? 1 : -1)
            },
          }; 

    render(){
    return(
        <>
        <SearchArea search={this.state.query}
        // Fix Search Bar
                    handleInputChange={this.handleInputChange}
                    onClick={this.searchFunction}    
                    />
        <EmployeeTable onSortChange={this.onSortChange}
        SortDirections={this.SortDirections}
        currentSort={this.state.currentSort}
        employees={this.state.employees}/>
        </>
    );
    }
}

