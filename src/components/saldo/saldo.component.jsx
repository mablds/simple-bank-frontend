import React from 'react';

import './saldo.styles.scss'

import eye from '../../public-imgs/icons/eye.svg';
import { useState } from 'react';


const Saldo = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem('login'));
    const [ isVisible, setIsVisible ] = useState(false);
    
    return (
        <div id="saldo">
            <div id="owner">
                <span>Olá, { userLoggedIn.owner }!</span>
            </div>
            <div id="account-info">
                <span>Conta: { userLoggedIn.account }</span>
            </div>
            <div id="valor">
                <span>{ isVisible ? userLoggedIn.value : `--------` }</span>
                <img className="icon" id="eye" src={eye} alt="visible function" onClick={ () => setIsVisible(!isVisible) }/>
            </div>
        </div>
    )
}

export default Saldo;