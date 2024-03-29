import React from 'react';
import ReactDOM from 'react-dom';
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
        }
    }
});

const initialState = {
    employees: [{
        id: 1,
        firstName: 'Add',
        middleInitial: 'Anne',
        lastName: 'Employee',
        dateOfBirth: '12/4/1986',
        dateOfEmployment: '9/1/2019',
        status: 'ACTIVE'
    }],
        logged: false,
        user: ''
}


function reducer(state = initialState, action) {

    switch(action.type) {
        case 'LOGIN':
            return { ...state, logged: true, user: action.payload }
        case 'LOGOUT':
            return { ...state, employees: [{
                id: 1,
                firstName: 'Add',
                middleInitial: 'Anne',
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
            return {...state, employees: action.payload }
        default: 
            return state
    }

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


serviceWorker.unregister();
