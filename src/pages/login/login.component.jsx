import React from 'react';
import { Link } from 'react-router-dom';
import './login.styles.scss'
import catComputer from '../../public-imgs/imgs/cat3.svg';

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
        event.preventDefault();
        axios.post('http://localhost:3001/auth', {
            email: this.state.email ,
            password: this.state.password
          }
    ).then((res) => {
        if(res.status === 200) {
            localStorage.clear();
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
            <div id="wrapper">
                <div id="images">
                    <img id="intro" alt="CatCommunication" src={catComputer}/>
                </div>
                <div className="App">
                    <form className="container" onSubmit={this.loginHandler}>
                        <h1 id="titulo">Simple Bank</h1>
                        <h2>Bem vindo de volta!</h2>
                        <input type="text" name="email" placeholder="Insira seu email" onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Insira sua senha" onChange={this.handleChange}/>
                        <button id="submit" type="submit" value="Acessar">Acessar</button><br/>
                        <Link to={"/signup"} style={ { color: 'inherit', textDecoration: 'inherit'} }>
                            <button id="signup">Criar Conta</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;