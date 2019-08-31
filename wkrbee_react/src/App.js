import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AuthScreen from './screens/AuthScreen';
import IndexScreen from './screens/IndexScreen';





function App() {
  return (
    <div>
      <NavBar/>
      <AuthScreen/>
      <IndexScreen/>
    </div>
  );
}

export default App;
