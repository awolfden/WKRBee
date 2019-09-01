import React from 'react';
import { connect } from 'react-redux';
import BeeLogo from '../images/beeLogo_large.png';
import LoginForm from '../components/LoginForm';




function AuthScreen(props) {
  

  // console.log(props.state);


  return (
    <div id='auth'>
      <div className='authScreenHeading'>
        <h1>Welcome to WorkerBee!</h1>
        <h2>Please Log In or Sign Up to Manage your Hive</h2>
      </div>
      <div className='authScreenFormsContainer'>
        <div className='authScreenLogoDiv'>
          <img className='authScreenLogo' src={BeeLogo} alt='workerbee logo'/>
          <p>WokerBee is an integrated employee management system for the modern business.</p>
        </div>
        <div className='authScreenFormsDiv'>
          <LoginForm title={'Login'} name={'userName'} password={'password'} action={'login_user'}/>
          <LoginForm title={'Sign Up'} name={'password'} password={'password'} action={'create_user'} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  firstName: state.employees[0].firstName,
  state: state
})

export default connect(mapStateToProps)(AuthScreen);
