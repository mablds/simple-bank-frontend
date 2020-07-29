import React from 'react';

import './saldo.styles.scss'

class Saldo extends React.Component {
    constructor(props) {
        super(props)

        const userLoggedIn = JSON.parse(localStorage.getItem('login'));

        this.state = {
            id: userLoggedIn.id,
            account: userLoggedIn.account,
            owner: userLoggedIn.owner,
            value: userLoggedIn.value,
            admin: userLoggedIn.admin,
            token: userLoggedIn.token
        }
    }

    render() {
        return (
            <div>
                ${this.state.value}
                ${this.state.owner}
            </div>
        )
    }
}

export default Saldo;