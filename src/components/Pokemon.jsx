import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  console.log("Pokemon", pokemon);
  
  const onHeartClick= ()=>{
     console.log("favoritei");
  }
  const heart = " ♥️ " ;

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-conteiner">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-botton">
          <div className="card-type">
            {pokemon.types.map((type, i) => {
              return (
                <div key={i} className="pokemon-type-text">{type.type.name.toUpperCase()}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
               {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
