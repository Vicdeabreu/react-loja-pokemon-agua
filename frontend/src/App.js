import React, {useState, useEffect} from 'react';
import {getAllPokemon, getPokemon} from './services/pokemon';
import Card from './components/Card'
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCartPlus,faShoppingCart,faWindowClose,faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/type/11/'

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.pokemon);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.pokemon);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.pokemon.url);
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
    {loading ? <h1>Loading...</h1> : (
      <h1>Data is fetched</h1>
    )}
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
          {pokemonData.map((pokemon, i) => {
            console.log(pokemonData);
            return <Card key={i} pokemon={pokemon}/>
          })}

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
