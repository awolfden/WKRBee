import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import BeeLogo from '../images/beeLogo_large.png';
import CreateModal from '../components/CreateModal';



function IndexScreen(props) {

  const { employees } = props.state;

  const getEmployees = async () => {

    try {
        const response = await fetch(`http://localhost:9001/employees/`);
        if(response.status !== 200){
            throw(Error(response.statusText));
        }
        const parsedEmployees = await response.json();  
        if(props.state.logged){
            const employeeArr = parsedEmployees.data;
            const userEmployees = employeeArr.filter((employee) => employee.user.toString() === props.state.user.toString());
            props.dispatch({ type:'GET_EMPLOYEES', payload: userEmployees })
        }   
    } catch(err) {
        console.log(err);
    }

  };

  //Note: the console linter is pointing to the empty dependency array of useEffect, but per the docs
  //this is how you implement "componentDidMount" with hooks so I'm not sure why it's a warning
   
  useEffect(() => {
    getEmployees()
  }, []);

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
          
          <table className='table'>
            <tr style={{width: '100%', color: 'gray'}}>
              <th className='tableNameCell' >EMPLOYEE NAME</th>
              <th className='tableStatus'>STATUS</th>
              <th className='tableDOB'>DOB</th>
              <th className='tableHireDate'>HIRE DATE</th>
              <th></th>
              <th></th>
            </tr>
          
          <EmployeeList getEmployees={getEmployees}  />
          </table>

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