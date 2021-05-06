import React from "react";
import EmployeeCard from '../EmployeeCard/EmployeeCard'

function EmployeeTable({ employees }) {
  
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      {employees.map(oneEmployee => ( 
      <EmployeeCard 
        key={oneEmployee.id.value} 
        firstName={oneEmployee.name.first} 
        lastName={oneEmployee.name.last} 
        picture={oneEmployee.picture.medium} 
        email={oneEmployee.email} 
        phone={oneEmployee.phone} 
        />))}
    </table>
  );
}

export default EmployeeTable;
