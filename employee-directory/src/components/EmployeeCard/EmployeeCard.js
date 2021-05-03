import React from 'react';

function EmployeeCard(props){
    return(
        <tbody>
                <tr key={props.id}>
                    <td> <img alt={props.firstName} src={props.picture}/></td>
                    <td> {props.firstName} {props.lastName}</td>
                    <td> {props.email}</td>
                    <td> {props.phone}</td>
                </tr>
        </tbody>
        
    );
}
export default EmployeeCard;