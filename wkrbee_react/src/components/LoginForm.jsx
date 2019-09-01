import React from 'react';
import { connect } from 'react-redux';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';






class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    // onSubmitRegister = (e) => {
    //     e.preventDefault();
    //     const { username, password } = this.state;
    //     if(username && password){
    //         console.log('hitting signup');



    //         this.props.dispatch({type: 'SIGNUP', payload: true});
            
    //     }
        
    // }


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

    onSubmitLogin = (formData, e) => {
      e.preventDefault();
      console.log(formData);
      // const { username, password } = this.state;
      // if(username && password){
      //     console.log('hitting login');
      //     this.props.dispatch({type: 'LOGIN', payload: true});
          
      // }
      
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
        const { username, password, isLoading } = this.state;
        console.log(this.props);
        

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
                inputProps={{
                  'aria-label': 'description',
                }}
              />
              
              </div>
              <div>
                <Button type='submit' variant='contained' color='primary' diabled={isLoading}>
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