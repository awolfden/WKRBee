import React from 'react';
import EditModal from './EditModal';
import ShowModal from './ShowModal';

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
        <div key={index} id={employee._id} style={{backgroundColor:backgroundColor(index)}}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div ><div style={{minWidth: '150px'}}>{employee.firstName} {employee.middleInitial} {employee.lastName}</div></div>
          <div ><div style={{justifyContent:'left'}}>{employee.status}</div></div>
          <div >{employee.dateOfBirth}</div>
          <div >{employee.dateOfEmployment}</div>
          <ShowModal employee={employee} />
          <EditModal getEmployees={props.getEmployees} employee={employee} />
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
