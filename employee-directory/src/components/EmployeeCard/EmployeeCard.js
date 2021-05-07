import React from 'react';

function EmployeeCard(props){
    return(
                <tr key={props.id}>
                    <td> <img alt={props.firstName} src={props.picture}className="rounded-circle"/></td>
                    <td> {props.firstName} </td>
                    <td>  {props.lastName}</td>
                    <td> {props.email}</td>
                    <td> {props.phone}</td>
                </tr>
    );
};

export default EmployeeCard;