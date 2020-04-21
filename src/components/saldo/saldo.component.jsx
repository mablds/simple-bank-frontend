import React from 'react';

import './saldo.styles.scss'

class Saldo extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        console.log(this.state)
        return (
            <div>
                teste
            </div>
        )
    }
}

export default Saldo;