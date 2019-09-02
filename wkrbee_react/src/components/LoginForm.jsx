import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


// I created this component as a class to show that I know how to use 'this' since 
// that was the question that I missed in the phone interview :) 

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // local state used here only for the form submission
            userName: '',
            password: ''
        }
    }

    onSubmitRegister = async (formData, e) => {
      e.preventDefault();

      console.log(formData);

      try {
          const createdUser = await fetch(`http://localhost:9001/users/register`, {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify(formData),
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          const parsedResponse = await createdUser.json();
            if(parsedResponse.data !== 'User name not available'){
              this.setState({
                isLogged: true,
                loggedUser: parsedResponse.data.user,
                loggedUserId: parsedResponse.data.usersDbId,
            });
            this.props.dispatch({type: 'LOGIN', payload: true});
          } else {
            this.setState({
              logFailMsg: 'User name not available'
            })
          }
      } catch(err) {
          console.log(err)
      }
      
    }

    onSubmitLogin = async (formData, e) => {
      e.preventDefault();
      console.log('hit login route');
      try {
        const loginUser = await fetch(`http://localhost:9001/users/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
        })
        const parsedResponse = await loginUser.json();
        console.log(parsedResponse);
        if(parsedResponse.data.msg === 'login successful'){
          this.props.dispatch({type: 'LOGIN', payload: parsedResponse.data.usersDbId}); 
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