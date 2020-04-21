import React from 'react';
import { Route } from 'react-router-dom'
import Login from './pages/login/login.component'
import './App.css';

function App() {
    return (
      <div>
        <Route exact path='/' component={Login} />
      </div>
    );
}

export default App;