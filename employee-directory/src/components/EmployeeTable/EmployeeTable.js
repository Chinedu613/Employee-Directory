import React from "react";
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './style.css';



function EmployeeTable(props) {
  
  const { employees, currentSort, SortDirections} = props;
  
  


  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col"><h6>Image</h6></th>
          <th scope="col"><div className='tableHeader'><h6>First Name</h6></div></th>
          <th scope="col"><div className='tableHeader'><h6>Last Name</h6><button onClick={props.onSortChange} className="rounded-circle">
									<i className={`fas fa-${SortDirections[currentSort].class}`} />
								</button></div></th>
          <th scope="col"><div className='tableHeader'><h6>Email</h6></div></th>
          <th scope="col"><div className='tableHeader'><h6>Phone</h6></div></th>
        </tr>
      </thead>
      <tbody>
      {employees.sort(SortDirections[currentSort].fn)
      .map(oneEmployee => ( 
      <EmployeeCard 
        key={oneEmployee.id.value} 
        firstName={oneEmployee.name.first} 
        lastName={oneEmployee.name.last} 
        picture={oneEmployee.picture.medium} 
        email={oneEmployee.email} 
        phone={oneEmployee.phone} 
        />))}
        </tbody>
    </table>
  );
}

export default EmployeeTable;

  /* if (setSortedField !== null) {
    sortedEmployees.sort((a, b) => {
      if(a[sortedField] < b[sortedField]) {
        //console.log(a[sortedField])
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
    console.log(sortedEmployees)
  } */