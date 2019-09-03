import React from 'react';
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
    
      return(
        <tr key={index} id={employee._id} style={{backgroundColor:backgroundColor(index)}}>
          
          <td className='tableNameCell' style={{width:"20%", padding: 5}}>{employee.firstName} {employee.middleInitial} {employee.lastName}</td>
          <td className='tableStatus'>{employee.status}</td>
          <td className='tableDOB'>{employee.dateOfBirth}</td>
          <td className='tableHireDate'>{employee.dateOfEmployment}</td>
          <td className='tableButton'><ShowModal getEmployees={props.getEmployees} employeeId={employee._id} /></td>
          <td className='tableButton'><EditModal getEmployees={props.getEmployees} employeeId={employee._id} /></td>
          
        </tr>
      )

  })

  return (
    <>
      {renderEmployees}
    </>
  );
}


const mapStateToProps = (state) =>({
  state: state
});

export default connect(mapStateToProps)(EmployeeList);

