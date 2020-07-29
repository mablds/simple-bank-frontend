import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login/login.component';
import Main from './pages/main/main.component';

import './App.css';

function App() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/home' component={Main} />
          <Route exact path='/' component={Login} />
        </div>
      </BrowserRouter>
    );
}
export default App;