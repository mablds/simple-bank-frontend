import React from 'react';
import './funcao-card.styles.scss'

const FuncaoCards = ({ nome, path, icon }) => {
    return (
        <div className="card-container">
            <img src={ icon } alt={ nome }/>
            <span> { nome } </span>
        </div>
    )
}

export default FuncaoCards;