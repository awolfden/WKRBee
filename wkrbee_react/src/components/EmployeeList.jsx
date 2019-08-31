import React from 'react';
import TransitionsModal from './EditModal';

function EmployeeList(props) {
  const { employees } = props;

  
  
  const renderEmployees = employees.map((employee, index) => {
      
    const backgroundColor = (index) => {
        if(index % 2 === 0){
          return '#eedfb2'
        } else {
          return '#ddd9c8'
        }
    }

    return(
        <div key={employee.id} id={employee.id} style={{backgroundColor:backgroundColor(index)}}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div ><div style={{minWidth: '150px'}}>{employee.firstName} {employee.middleInitial} {employee.lastName}</div></div>
          <div ><div style={{justifyContent:'left'}}>{employee.status}</div></div>
          <div >{employee.dateOfBirth}</div>
          <div >{employee.dateOfEmployment}</div>
          <div >{employee.id}</div>
          <TransitionsModal employee={employee} />
          </div>
        </div>
      )
    })


  return (
    <div className="employeeList">
      {renderEmployees}
    </div>
  );
}

export default EmployeeList;
