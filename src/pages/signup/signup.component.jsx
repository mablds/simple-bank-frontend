import React from 'react';
import { Link } from 'react-router-dom';
import catComputer from '../../public-imgs/imgs/cat1.svg';

import './signup.styles.scss';

import home from '../../public-imgs/icons/home.svg'

const axios = require('axios');

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            owner: "",
            email: "",
            password: "",
        }
    }

    signUpHandler = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/bank/create', {
            owner: this.state.owner,
            email: this.state.email,
            password: this.state.password
          }
    ).then((res) => {
        if(res.status === 201) {
            this.props.history.push('/');
          } else {
              if(res.status === 401) {
                alert('E-mail já cadastrado.')
              }
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
                <div className="App-signup">
                    <form className="container-signup" onSubmit={this.signUpHandler}>
                        <h2>É muito simples se cadastrar:</h2>
                        <input type="text" name="owner" placeholder="Insira seu nome" onChange={this.handleChange} />
                        <input type="email" name="email" placeholder="Insira seu email" onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Insira sua senha mais segura" onChange={this.handleChange}/>
                        <button id="submit" type="submit" value="Acessar">Cadastrar</button><br/>
                        
                        <Link to={"/"} style={ { color: 'inherit', textDecoration: 'inherit'} }>
                            <img id="home" alt="home icon" src={home}/> <br/>
                            <span>Voltar</span>
                        </Link>
                    </form>
                </div>
                <div id="images">
                    <img id="intro" alt="CatCommunication" src={catComputer}/>
                </div>
            </div>
        )
    }
}

export default SignUp;