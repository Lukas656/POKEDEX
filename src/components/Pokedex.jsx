import React from "react";
//import Pokemon from "./Pokemon.jsx";

const Pokedex = (props) => {
  const { pokemons, loading } = props;




  return (
    <div>
      <section className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </section>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            console.log(pokemons);
            return (
              <div >
                <div>nome: {pokemon.name}</div>
                {console.log(pokemon.name)}
                <img alt={pokemon.name} src={pokemon.url} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
