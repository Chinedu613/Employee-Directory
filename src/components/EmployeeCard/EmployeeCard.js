import React from "react";
import "./style.css";
function EmployeeCard(props) {
  return (
    <tr key={props.id}>
      <td>
        <div className="rowBox">
          <img
            alt={props.firstName}
            src={props.picture}
            className="rounded-circle"
          />
        </div>
      </td>
      <td>
        <div className="rowBox">
          <p>{props.firstName} </p>
        </div>
      </td>
      <td>
        <div className="rowBox">
          <p>{props.lastName} </p>
        </div>
      </td>
      <td>
        <div className="rowBox">
          <a href={`mailto:${props.email}`}><p>{props.email}</p></a>  
        </div>
      </td>
      <td>
        <div className="rowBox">
        <a href={`tel:${props.phone}`}><p>{props.phone}</p></a>
        </div>
      </td>
    </tr>
  );
}

export default EmployeeCard;
