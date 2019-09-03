import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey, brown } from '@material-ui/core/colors';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F2DA8F',
            light: grey[400],
            dark: grey[400]
        },
        secondary: {
            main: brown[900],
            light: brown[100],
            dark: brown[400]
        },
        
    }
});

const initialState = {
    employees: [{
        id: 1,
        firstName: 'Adam',
        middleInitial: 'G',
        lastName: 'Wolfman',
        dateOfBirth: '12/4/1986',
        dateOfEmployment: '9/1/2019',
        status: 'active'
    },
    {
        id: 2,
        firstName: 'James',
        middleInitial: 'G',
        lastName: 'Furgeson',
        dateOfBirth: '12/4/1986',
        dateOfEmployment: '9/1/2019',
        status: 'active'
      }],
        logged: false,
        user: ''
}


function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case 'LOGIN':
            return { ...state, logged: true, user: action.payload }
        case 'LOGOUT':
            return { ...state, employees: [{
                id: 1,
                firstName: 'Add',
                middleInitial: 'An',
                lastName: 'Employee',
                dateOfBirth: '12/4/1986',
                dateOfEmployment: '9/1/2019',
                status: 'ACTIVE'
            }], logged: false, user: '' }
        case 'SIGNUP':
            return { ...state, logged: true, user: action.payload }
        case 'GET_EMPLOYEES':
            if(action.payload.length === 0){
                return { ...state }
            } else {
                return { ...state, employees: action.payload, ...state.logged, ...state.user }
            }
            
        case 'CREATE_EMPLOYEE':
            console.log(action.payload);
            return {...state, employees: action.payload }
        default: 
            return state
    }

    const testFunction = () => {
        return(
            console.log('can you pass down action functions with redux?')
        )
    };

}



const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
