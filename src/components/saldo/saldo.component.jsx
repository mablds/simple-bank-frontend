import React from 'react';

import './saldo.styles.scss'

import eye from '../../public-imgs/icons/eye.svg';
import { useState } from 'react';

const userLoggedIn = JSON.parse(localStorage.getItem('login'));

const Saldo = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    return (
        <div id="saldo">
            <div id="owner">
                Olá, {userLoggedIn.owner}!
            </div>
            <div id="valor">
                <span>{isVisible ? userLoggedIn.value : `--------`}</span>
                <img className="icon" id="eye" src={eye} alt="visible function" onClick={ () => setIsVisible(!isVisible) }/>
            </div>
        </div>
    )
}

export default Saldo;