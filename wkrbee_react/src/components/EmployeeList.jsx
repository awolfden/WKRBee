import React, { useEffect } from 'react';


function EmployeeList(props) {
  const { employees } = props;
  
  const renderEmployees = employees.map((employee, index) => {
      return(
        <div key={index}>
          <div style={{display: 'flex', justifyContent: 'left'}}>
          <div style={{padding: '0 10px'}}>{employee.firstName} {employee.middleInitial} {employee.lastName}</div>
          <div style={{padding: '0 10px'}}>{employee.status}</div>
          <div style={{padding: '0 10px'}}>{employee.dateOfBirth}</div>
          <div style={{padding: '0 10px'}}>{employee.dateOfEmployment}</div>
          <div style={{padding: '0 10px'}}>{employee.id}</div>
          <div onClick={() => console.log('fuck you')} style={{padding: '0 10px'}}>EDIT</div>
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
