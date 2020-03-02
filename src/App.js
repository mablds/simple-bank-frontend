import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Bem vindo de volta!</h2>
            <input type="text" name="account" placeholder="Account"/>
            <input type="password" name="account-password" placeholder="Password"/>
            <button id="submit" type="submit" value="Acessar">Acessar</button>
        </div>
      </div>
    );
  }

}

export default App;
