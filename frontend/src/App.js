import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCartPlus,faShoppingCart,faWindowClose,faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-center">
      <span className="nav-icon">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <img src="./img/logo.png" width="10%" alt="pokemon azul store logo"/>
      <div className="cart-btn">
        <span className="nav-icon">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        <div className="cart-items">0</div>
      </div>
    </div>
  </nav>

  <header className="pokehead">
    <div className="banner">
      <h1 className="banner-title">Loja Pokémon azul</h1>
      <button className="banner-btn">Compre agora</button>
    </div>
  </header>

    <section className="product">
      <div className="section-title">
        <h2>Nossos pokémon</h2>
      </div>
      <div className="products-center">

        <article className="product">
          <div className="img-container">
            <img src="../img/squirtle.jpg" alt="squirtle" className="product-img"/>
            <button className="bag-btn" data-id="1">
              <FontAwesomeIcon icon={faShoppingCart} />
              Adicionar ao carrinho
            </button>
          </div>
          <h3>Squirtle</h3>
          <h4>R$ 20</h4>
        </article>

        <div className="cart-overlay">
          <div className="cart">
            <span className="close-cart">
              <FontAwesomeIcon icon={faWindowClose} />
            </span>
            <h2>Seu carrinho</h2>
            <div className="cart-content">

              <div className="cart-item">
                <img src="./img/squirtle.jpg" alt="squirtle"/>
                <div>
                  <h4>Squirtle</h4>
                  <h5>R$20</h5>
                  <span className="remove-item">Tirar</span>
                </div>
                <div>
                  <i className="fas fa-chevron-up"></i>
                  <p className="item-amount">1</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>

            </div>
            <div className="cart-footer">
              <h3>Total : R$ <span className="cart-total">0</span></h3>
              <button className="clear-cart banner-btn">Limpar carrinho</button>
            </div>
          </div>
        </div>

      </div>
    </section>
    <script src="https://kit.fontawesome.com/780139cf13.js" crossorigin="anonymous"></script>
    </>
  );
}

export default App;
