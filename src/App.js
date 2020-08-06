import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login/login.component';
import Main from './pages/main/main.component';
import SignUp from './pages/signup/signup.component';

import './App.css';

function App() {
    return (
      <BrowserRouter>
        <Route exact path='/home' component={ Main } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/' component={ Login } />
      </BrowserRouter>
    );
}
export default App;