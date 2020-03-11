import React from 'react';
import './App.css';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      account: "",
      password: ""
    }
  }

  loginHandler = async (event) => {
    event.preventDefault();
    axios.post('http://simple-bank.herokuapp.com/auth', {
      header: {
        "Access-Control-Allow-Origin": "*"
      },
      body: {
        account: this.state.account,
        password: this.state.password
      }
    }).then((res) => console.log(res));
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className="App">
        <form className="container" onSubmit={this.loginHandler}>
          <h2>Bem vindo de volta!</h2>
            <input type="text" name="account" placeholder="Account" onChange={this.handleChange} />
            <input type="password" name="account-password" placeholder="Password" onChange={this.handleChange}/>
            <button id="submit" type="submit" value="Acessar"  >Acessar</button>
        </form>
      </div>
    );
  }

}

export default App;
