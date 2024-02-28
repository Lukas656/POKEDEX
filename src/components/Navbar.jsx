import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div>Favoritos: {favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
