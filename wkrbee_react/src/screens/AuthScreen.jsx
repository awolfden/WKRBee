import React from 'react';
import BeeLogo from '../images/beeLogo_large.png';
import LoginForm from '../components/LoginForm';



function AuthScreen() {
  return (
    <div id='auth'>
      <div className='authScreenHeading'>
        <h1>Welcome to WorkerBee!</h1>
        <h2>Please Log In or Sign Up to Manage your Hive</h2>
      </div>
      <div className='authScreenFormsContainer'>
        <div className='authScreenLogoDiv'>
          <img className='authScreenLogo' src={BeeLogo} alt='workerbee logo'/>
        </div>
        <div className='authScreenFormsDiv'>
          <LoginForm/>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
