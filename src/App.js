import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login/login.component';
import Saldo from './components/saldo/saldo.component';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/main-menu' component={Saldo} />
        </div>
      </BrowserRouter>
    );
}
export default App;