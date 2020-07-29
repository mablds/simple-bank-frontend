import React from 'react';

import Saldo from '../../components/saldo/saldo.component';
import Funcoes from '../../components/funcoes/funcoes.component';

import './main.styles.scss'

const Main = () => {
    return (
        <div id="main">
            <Saldo />
            <Funcoes />
        </div>
    )
}

export default Main;