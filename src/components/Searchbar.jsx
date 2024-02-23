import React, { useState } from "react";
import {searchPokemon} from '../data/api';

const Searchbar = () => {
    const [search, setSearch] = useState("dito");
    const [pokemon, setPokemon] = useState()
   
    const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClick = () => {
    onSearchHandler(search)
  };  

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
    console.log(result);
  }

  

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>

      <div>
        <button className="search-btn" onClick={onButtonClick}>
          Buscar
        </button>
      </div>
      <br/>
      <div className="">

      {pokemon ? (
          <div>
                <h1>Nome:{pokemon.name}</h1>
                <h1>Peso:{pokemon.weight}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
      ) : null
    }
    </div>
      
    </div>
  );
};

export default Searchbar;
