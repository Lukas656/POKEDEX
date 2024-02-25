import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getpokemons, getpokemonData } from "./data/api";

function App() {
  const [page, setPage] = useState(0);
  const [total, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const itensPerPage = 25;
  useEffect(() => {
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getpokemons(itensPerPage, itensPerPage * page);

            const promises = data.results.map(async (pokemon) => {
                return await getpokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotalPages(Math.ceil(data.count / itensPerPage));
        } catch (error) {
            console.log("fetchPokemons error: ", error);
        }
    };

    fetchPokemons();
}, [page, itensPerPage]);


  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={total} setPage={setPage}/>
    </>
  );
}

export default App;
