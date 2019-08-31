import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EmployeeList from '../components/EmployeeList';
import BeeLogo from '../images/beeLogo_large.png'




function IndexScreen(props) {
  console.log(props);
  const { employees } = props.state;
  

  const createEmployee = () => {
    
    console.log('new employee to be added now')
    //props.dispatch({type: 'CREATE_EMPLOYEE', payload: newEmployee});

  }


  
  return (
    <div className="App">
      <div>
        <h2>Welcome to WorkerBee where we make employee management as sweet as honey!</h2>
      </div>

      <div>
        <h3>Organization: Beehive Inc.</h3>
        <h3>Active Employees: {employees.length}</h3>
      </div>

      <div className='indexContentDiv' >
        <div className='employeeListDiv'>
          <h3 onClick={createEmployee} >Add New Employee +</h3>
          <EmployeeList employees={employees} />
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