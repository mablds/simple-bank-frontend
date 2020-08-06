import React from 'react';
import './funcoes.styles.scss'

import FuncaoCard from '../funcao-card/funcao-card.component';

import services from '../../services/servicesFuncoes';
import { Link } from 'react-router-dom';

import exit from '../../public-imgs/icons/exit.svg';


const Funcoes = () => {
    const removeUserStorage = () => localStorage.clear();
    return (
        <div id="funcoes">
            { services.map((element) => {
                return (
                    <Link key={element.name} to={element.path} style={ { color: 'inherit', textDecoration: 'inherit'} }>
                        <FuncaoCard 
                            nome={element.name} 
                            path={element.path} 
                            icon={element.icon}
                        />
                    </Link>
                    )
                }
            )}
            <Link to={"/"} style={ { color: 'inherit', textDecoration: 'inherit'} }>
                <FuncaoCard 
                    nome={"Sair"}
                    path={"/"}
                    icon={exit}
                    onClick={() => {removeUserStorage()}}
                />
            </Link>
        </div>
    )
}

export default Funcoes;