import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
import { faBars,faCartPlus,faShoppingCart,faWindowClose,faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Card({ pokemon }) {
  return (
    <article className="product"> 
      <div className="img-container">
        <img src={pokemon.sprites.front_default} alt="" className="product-img"/>
        <button className="bag-btn" data-id="1">
          <FontAwesomeIcon icon={faShoppingCart} />
          Adicionar ao carrinho
        </button>
      </div>
      <div>
        <h3>{pokemon.name}</h3>
        <div>
        {pokemon.types.map(type=>{
          return (
            <h5><strong>Tipo: {type.type.name}</strong></h5>
          )
        })}
        </div>
        <h4>Características:</h4>
        <h5>Peso: {pokemon.weight} mg</h5>
        <h5>Altura: {pokemon.height} cm</h5>
        <h4>R$ 20</h4>
      </div>
    </article>
  )
}

export default Card;