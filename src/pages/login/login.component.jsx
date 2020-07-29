import React from 'react';

import './login.styles.scss'

const axios = require('axios');

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            accountInfo: {}
        }
    }

    loginHandler = async (event) => {
        //http://simple-bank.herokuapp.com/auth
        event.preventDefault();
        axios.post('http://localhost:3001/auth', {
            email: this.state.email ,
            password: this.state.password
          }
    ).then((res) => {
        if(res.status === 200) {
            localStorage.setItem('login', JSON.stringify(res.data));
            this.props.history.push('/home');
          }
        })
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
                    <input type="text" name="email" placeholder="Enter your email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Type your very secure password" onChange={this.handleChange}/>
                    <button id="submit" type="submit" value="Acessar">Acessar</button>
                </form>
            </div>
        )
    }
}

export default Login;