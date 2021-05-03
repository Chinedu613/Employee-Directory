import React from 'react';

function EmployeeTable(props) {
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>
                {props.children}
        </table>
    );
}

export default EmployeeTable;