import React from "react";

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
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>
            
                <img alt= {employee.name.last} src={employee.picture.medium} />
              </td>
              <td>
                
                {employee.name.first} {employee.name.last}
              </td>
              <td> {employee.email}</td>
              <td> {employee.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
