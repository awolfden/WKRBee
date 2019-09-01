import React from 'react';
import { connect } from 'react-redux';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';






class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        

    }

    onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if(username && password){
            console.log('hitting');
            this.props.dispatch({type: 'LOGIN', payload: true});
            
        }
        
    }

    onChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    render(){
        const { username, password, isLoading } = this.state;
        console.log(this.props)
        return (
            <form onSubmit={this.onSubmit} className="loginForm">
              <h3>{this.props.title}</h3> 
              <div>
              <Input
                field='identifier'
                name='username'
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