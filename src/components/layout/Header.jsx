import React from "react";
import './header.css'
const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const Header = () => {
  return (
    <div className="header">
    <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
    </div>
    <div>
        <nav>
            <ul className="header-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/app">Pokedex</a></li>
                <li><a href="/login">Jogo</a></li>
            </ul>
        </nav>
    </div>
       
    </div>
)};

export default Header;
