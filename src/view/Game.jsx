import React, { useState, useEffect, useCallback } from "react";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/game.css";
import { Link } from "react-router-dom";
import { getPokemonData, getPokemons } from "../data/api";

function Game() {
  const [player, setPlayer] = useState(localStorage.getItem("player") || "");
  const [pokemons, setPokemons] = useState([]);
  const [cartas, setCartas] = useState([]);

  const [jogadas, setJogadas] = useState(0);
  const STORAGE_KEY = `pokemon-memory-game-${player}`;
  const handleLogout = () => {
    localStorage.removeItem("pokemon-memory-game");
    localStorage.removeItem("player");
  };
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  const shuffleCards = useCallback((pokemonList) => {
    return [...pokemonList, ...pokemonList]
      .map((pokemon, index) => ({
        uniqueId: `${pokemon.id}-${index}`,
        pokemon,
      }))
      .sort(() => Math.random() - 0.5);
  }, []);

  const fetchPokemons = useCallback(async () => {
    try {
      const data = await getPokemons(4, 0);

      const promises = data.results.map((pokemon) =>
        getPokemonData(pokemon.url),
      );

      const results = await Promise.all(promises);

      setPokemons(results);

      const shuffledCards = shuffleCards(results);
      setCartas(shuffledCards);
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  }, [shuffleCards]);

  useEffect(() => {
    const playerName = localStorage.getItem("player");

    if (playerName) {
      setPlayer(playerName);
    }

    const savedGame = localStorage.getItem(STORAGE_KEY);

    if (savedGame) {
      const parsed = JSON.parse(savedGame);

      setJogadas(parsed.jogadas || 0);
      setMatchedCards(parsed.matchedCards || []);
    }

    fetchPokemons();
  }, [fetchPokemons]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        jogadas,
        matchedCards,
      }),
    );
  }, [jogadas, matchedCards]);

  useEffect(() => {
    if (selectedCards.length !== 2) return;

    const [firstCard, secondCard] = selectedCards;

    setJogadas((prev) => prev + 1);

    if (firstCard.pokemon.name === secondCard.pokemon.name) {
      setMatchedCards((prev) => [...prev, firstCard.pokemon.name]);

      setSelectedCards([]);
    } else {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (pokemons.length > 0 && matchedCards.length === pokemons.length) {
      setGameFinished(true);

      const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

      ranking.push({
        player,
        jogadas,
        date: new Date().toISOString(),
      });

      ranking.sort((a, b) => a.jogadas - b.jogadas);

      localStorage.setItem("ranking", JSON.stringify(ranking.slice(0, 10)));

      localStorage.removeItem(STORAGE_KEY);
    }
  }, [matchedCards, pokemons, jogadas, player, STORAGE_KEY]);

  const flipCard = (card) => {
    if (gameFinished) return;

    if (selectedCards.length === 2) return;

    const alreadySelected = selectedCards.some(
      (selected) => selected.uniqueId === card.uniqueId,
    );

    if (alreadySelected) return;

    const alreadyMatched = matchedCards.includes(card.pokemon.name);

    if (alreadyMatched) return;

    setSelectedCards((prev) => [...prev, card]);
  };

  const resetGame = () => {
    localStorage.removeItem(STORAGE_KEY);

    setJogadas(0);
    setSelectedCards([]);
    setMatchedCards([]);
    setGameFinished(false);

    setCartas(shuffleCards(pokemons));
  };

  const isCardVisible = (card) => {
    const selected = selectedCards.some(
      (selected) => selected.uniqueId === card.uniqueId,
    );

    const matched = matchedCards.includes(card.pokemon.name);

    return selected || matched;
  };

  return (
    <div className="game">
      <main className="main-game">
        <header className="header-game">
          <div className="player-card">
            <span className="player-label">Treinador</span>
            <span className="player-name">{player}</span>
          </div>

          <div className="score-card">
            <span className="player-label">Jogadas</span>
            <span className="score-value">{jogadas}</span>
          </div>

          <div className="header-actions">
            <Link to="/ranking" className="ranking-link">
              🏆 Ranking
            </Link>

            <Link to="/login" className="exit" onClick={handleLogout}>
              🚪 Sair
            </Link>
          </div>
        </header>

        <section className="menu-game">
          <h1 className="text">
            {gameFinished
              ? `🎉 Parabéns ${player}!`
              : "⚡ Jogo da Memória Pokémon"}
          </h1>

          <p className="subtitle">
            {gameFinished
              ? `Você venceu em ${jogadas} jogadas`
              : "Encontre todos os pares e entre para o Hall da Fama"}
          </p>

          {gameFinished && (
            <button className="reset-btn" onClick={resetGame}>
              🔄 Jogar Novamente
            </button>
          )}
        </section>

        <div className="grid-game">
          {cartas.map((card) => {
            const revealed = isCardVisible(card);

            return (
              <div
                key={card.uniqueId}
                className={`card-game ${revealed ? "reveal-card" : ""}`}
                onClick={() => flipCard(card)}
              >
                <div
                  className={`face front-grid ${
                    matchedCards.includes(card.pokemon.name)
                      ? "disabled-card"
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(${card.pokemon.sprites.front_default})`,
                  }}
                >
                  <p className="name-pokemon">{card.pokemon.name}</p>
                </div>

                <div className="face back-grid"></div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Game;
