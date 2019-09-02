import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import BeeLogo from '../images/beeLogo_large.png';
import CreateModal from '../components/CreateModal';
// import { getEmployees } from '../api_functions/EmployeeFunctions';




function IndexScreen(props) {
  console.log(props.state);
  const { employees } = props.state;
  

  const createEmployee = () => {
    
    console.log('new employee to be added now')
    //props.dispatch({type: 'CREATE_EMPLOYEE', payload: newEmployee});

  }

    const getEmployees = async () => {

      try {
          const response = await fetch(`http://localhost:9001/employees/`);

          if(response.status !== 200){
              throw(Error(response.statusText));
          }

          const parsedEmployees = await response.json();  
          console.log(parsedEmployees);   
          console.log(props.state.user, 'state user')   
          if(props.state.logged){
              const employeeArr = parsedEmployees.data;
              console.log(employeeArr, 'employee array');
              const userEmployees = employeeArr.filter((employee) => employee.user.toString() === props.state.user.toString());
              console.log(userEmployees, 'user employees');
              props.dispatch({ type:'GET_EMPLOYEES', payload: userEmployees })

          }   
      } catch(err) {
          console.log(err);
      }

  };

  useEffect(() => {
    getEmployees()
  }, [])

  
  return (
    <div className="indexScreenDiv">
      <div className='indexScreenTitle'>
        <h2>Welcome to WorkerBee: Employee management that's sweeter than honey!</h2>
      </div>

      <div className='indexScreenOrg'>
        <h3>Organization: Beehive Inc.</h3>
        <h3>Active Employees: {employees.length}</h3>
      </div>

      <div className='indexContentDiv' >
        <div className='employeeListDiv'>
        
          <CreateModal getEmployees={getEmployees}>Add New Employee +</CreateModal>
          

          <EmployeeList getEmployees={getEmployees} employees={employees} />
        </div>
        <div className='indexLogoDiv'>
          <img src={BeeLogo} alt="bee logo"/>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state) =>({
  state: state
});

export default connect(mapStateToProps)(IndexScreen);