import React from "react";
import Pokemon from "./Pokemon.jsx";
import Pagination from "./Pagination.jsx";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage} = props;
  const onLeftClickhandler=()=>{
    if(page > 0){
      setPage(page-1)
    }
  }
  const onRightClickhandler=()=>{
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }

  return (
    <div>
      <section className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination 
        page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClickhandler}
        onRightClick={onRightClickhandler}
        />
      </section>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, i) => {
              console.log(pokemons);
              return <Pokemon key={i} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
