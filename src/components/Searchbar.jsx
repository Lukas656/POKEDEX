import React, { useState } from "react";
import "./carousel.css"

const Searchbar = ({ onSearch, onShowFavorites, showFavorites }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length >= 2) {
      onSearch(value.toLowerCase());
    }

    if (value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search.toLowerCase());
  };

  const onButtonClickFavorites = () => {
    onShowFavorites();
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon"
          value={search}
          onChange={onChangeHandler}
        />
      </div>

      <div className="btns-conteiner">
        <div className="searchbar-btn">
          <button onClick={onButtonClickHandler}>Buscar</button>
        </div>

        <div className="searchbar-btn">
          <button
            className={`favorites-btn ${showFavorites ? "active" : ""}`}
            onClick={onButtonClickFavorites}
          >
            {showFavorites ? "📋 Mostrar Todos" : "❤️ Favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
