import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './saldo.styles.scss'

import eye from '../../public-imgs/icons/eye.svg';

const Saldo = () => {
    const accountLoggedIn = JSON.parse(localStorage.getItem('login'));
    const [ isVisible, setIsVisible ] = useState(false);
    const [ accountVerifiedInfo, setAccountVerifiedInfo ] = useState(accountLoggedIn);

    const invalidToken = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    const getAccountInfo = () => {
        axios.get('http://localhost:3001/bank/' + accountLoggedIn.account, {
            headers: {
                'x-access-token': accountLoggedIn.token,
            }
        }).then((response) => {
            response.status === 200 ? setAccountVerifiedInfo(response.data) : invalidToken();
        });
    };

    useEffect(() => {
        getAccountInfo();
    }, []);
    
    return (
        <div id="saldo">
            <div id="owner">
                <span>Olá, { accountVerifiedInfo.owner }!</span>
            </div>
            <div id="account-info">
                <span>Conta: { accountVerifiedInfo.account }</span>
            </div>
            <div id="valor">
                <span>{ isVisible ? accountVerifiedInfo.value : `--------` }</span>
                <img className="icon" id="eye" src={eye} alt="visible function" onClick={ () => setIsVisible(!isVisible) }/>
            </div>
        </div>
    )
}

export default Saldo;