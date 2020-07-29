import React from 'react';

import './saldo.styles.scss'

const Saldo = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem('login'));

    return (
        <div id="saldo">
            <div id="owner">
                Olá, {userLoggedIn.owner}!
            </div>
            <div id="valor">
                {userLoggedIn.value},00
            </div>
        </div>
    )
}

export default Saldo;