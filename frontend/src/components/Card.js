import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
import { faBars,faCartPlus,faShoppingCart,faWindowClose,faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Card({pokemon}) {
  console.log(pokemon)
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
        <h4>R$ 20</h4>
      </div>
    </article>
  )
}

export default Card;