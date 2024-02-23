import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getpokemons } from "./data/api";


function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async()=>{
      try {
        setLoading(true)
        const result = await getpokemons()
        setPokemons(result);
        setLoading(false);
                 
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
  }

  useEffect(() => {
    console.log("carregandou");
    fetchPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </>
  );
}

export default App;
