export const searchPokemon = async (search) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0`
    );

    const data = await response.json();

    const matches = data.results.filter((pokemon) =>
      pokemon.name.startsWith(search.toLowerCase())
    );

    if (!matches.length) {
      return null;
    }

    const pokemonData = await Promise.all(
      matches.slice(0, 10).map((pokemon) =>
        getPokemonData(pokemon.url)
      )
    );

    return pokemonData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

 

export const getPokemons = async (limit = 150, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}