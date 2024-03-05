import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const Header = () => {
  return (
    <div className="header">
    <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
    </div>
    <div>
        <nav>
            <ul className="header-menu" translate="no">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">Pokedex</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
       
    </div>
)};

export default Header;
