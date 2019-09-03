import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AuthScreen from './screens/AuthScreen';
import IndexScreen from './screens/IndexScreen';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div>
      <NavBar/>
      {props.logged ? <IndexScreen/> : <AuthScreen/>}
    </div>
  );
}


const mapStateToProps = (state) =>({
  logged: state.logged
});

export default connect(mapStateToProps)(App);