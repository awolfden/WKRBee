import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    input: {
      margin: theme.spacing(1),
      width: 250
    },
    button: {
        margin: theme.spacing(1),
        width: 150
    }
  }));



function LoginForm(props) {
    const classes = useStyles();

    return (
    <form className="loginForm">
      <h3>{props.title}</h3> 
      <div className={classes.container}>
      <Input
        placeholder="Username"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Password"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
            Submit
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;