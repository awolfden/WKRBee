import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EditModal from './EditModal';
import ShowModal from './ShowModal';

function EmployeeList(props) {
  const { employees } = props.state;
  
  const renderEmployees = employees.map((employee, index) => {
      
    const backgroundColor = (index) => {
        if(index % 2 === 0){
          return '#eedfb2'
        } else {
          return '#ddd9c8'
        }
    }
    console.log(employee._id, 'employee id on employeeList');
    
      return(
        <div key={index} id={employee._id} style={{backgroundColor:backgroundColor(index)}}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div ><div style={{minWidth: '150px'}}>{employee.firstName} {employee.middleInitial} {employee.lastName}</div></div>
          <div ><div style={{justifyContent:'left'}}>{employee.status}</div></div>
          <div >{employee.dateOfBirth}</div>
          <div >{employee.dateOfEmployment}</div>
          <ShowModal getEmployees={props.getEmployees} employeeId={employee._id} />
          <EditModal getEmployees={props.getEmployees} employeeId={employee._id} />
          </div>
        </div>
      )

  })

  // useEffect(() => {
  //   props.getEmployees()
  // }, []) 

  return (
    <div className="employeeList">
      {renderEmployees}
    </div>
  );
}


const mapStateToProps = (state) =>({
  state: state
});

export default connect(mapStateToProps)(EmployeeList);

