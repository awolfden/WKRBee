import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


// I created this component as a class to show that I know how to use 'this' since 
// that was the question that I fumbled in the phone interview :) 

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // I used local state for forms throughout the app 
            userName: '',
            password: ''
        }
    }

    onSubmitRegister = async (formData, e) => {
      e.preventDefault();

      try {
          const createdUser = await fetch(`https://cors-anywhere.herokuapp.com/https://wkrbee-api.herokuapp.com/users/register`, {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify(formData),
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          const parsedResponse = await createdUser.json();
            if(parsedResponse.data !== 'User name not available'){

            this.props.dispatch({type: 'LOGIN', payload: parsedResponse.data.usersDbId});
          } else {
            this.setState({
              logFailMsg: 'User Name Not Available'
            })
          }
      } catch(err) {
          console.log(err)
      }
      
    }

    onSubmitLogin = async (formData, e) => {
      e.preventDefault();

      try {
        const loginUser = await fetch(`https://cors-anywhere.herokuapp.com/https://wkrbee-api.herokuapp.com/users/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
        })
        const parsedResponse = await loginUser.json();
        //console.log(parsedResponse);
        if(parsedResponse.data.msg === 'login successful'){
          this.props.dispatch({type: 'LOGIN', payload: parsedResponse.data.usersDbId}); 
        } else {
          this.setState({
            logFailMsg: 'Credentials Incorrect'
          })
        }

      } catch(err) {
        console.log(err);
      }

    }

    onChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    whichSubmit = (formData, e) => {
      e.preventDefault();
      if(this.props.title === 'Login'){
        return this.onSubmitLogin(formData, e);
      } else if (this.props.title === 'Sign Up'){
        return this.onSubmitRegister(formData, e);
      }
    }

    render(){

        return (
            <form onSubmit={this.whichSubmit.bind(null, this.state)} className="loginForm">
              <h3>{this.props.title}</h3>
              { this.state.logFailMsg ? <p className='logFail'>{this.state.logFailMsg}</p> : null } 
              <div>
              <Input
                field='identifier'
                name='userName'
                onChange={this.onChange}
                placeholder='Username'
                inputProps={{
                  'aria-label': 'description',
                }}
              />
              <Input
                field='identifier'
                name='password'
                onChange={this.onChange}
                placeholder='Password'
                type='password'
                inputProps={{
                  'aria-label': 'description',
                }}
              />
              
              </div>
              <div>
                <Button type='submit' variant='contained' color='primary' >
                    Submit
                </Button>
              </div>
            </form>
          );
        };
    }


const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(LoginForm);