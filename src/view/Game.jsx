import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/game.css";
import { Link } from "react-router-dom";
import Cards from "../data/cards.js";

function Game() {
  const [player, setPlayer] = useState("");
  const [jogadas, setJogadas] = useState(0);
  const [cartas, setCartas] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const playerName = localStorage.getItem("player");
    if (playerName) {
      setPlayer(playerName);
    }
  }, []);

  useEffect(() => {
    const duplicateCharacteres = [...Cards, ...Cards];
    const shuffeldArray = duplicateCharacteres.sort(() => Math.random() - 0.5);
    setCartas(shuffeldArray);
  }, []);

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");
    const text = document.querySelector(".text");
    const cardsArray = [...Cards, ...Cards];
    if (disabledCards.length === cardsArray.length) {
      text.innerHTML = `Parabens ${player}!! Conseguiiu em ${jogadas} jogadas `;
    }
  };

  const flipCard = useCallback((event) => {
    const card = event.currentTarget;
    // Verifica se a carta já está virada
    if (card.classList.contains("reveal-card")) {
      return;
    }

    // Verifica se já existem duas cartas viradas
    if (cardsRef.current.length >= 2) {
      return;
    }

    // Adiciona a carta ao array de cartas viradas
    cardsRef.current.push(card);
    card.classList.add("reveal-card");

    // Se já houver duas cartas viradas, faça o que for necessário com elas
    if (cardsRef.current.length === 2) {
      // Implemente aqui a lógica para manipular as duas cartas viradas
      // Por exemplo, você pode comparar as cartas, etc.
      const nome1 = cardsRef.current[0].getAttribute("dataNome");
      const nome2 = cardsRef.current[1].getAttribute("dataNome");
      setJogadas(jogadas + 1);
      if (nome1 === nome2) {
        cardsRef.current[0].firstChild.classList.add("disabled-card");
        cardsRef.current[1].firstChild.classList.add("disabled-card");
        cardsRef.current = [];
        checkEndGame();
      }

      // Após manipular as cartas, limpe o array para permitir virar mais cartas
      setTimeout(() => {
        cardsRef.current.forEach((card) => card.classList.remove("reveal-card"));
        cardsRef.current = [];
      }, 1000); // Adicione um atraso de 1 segundo para permitir que o jogador veja as cartas antes de virarem novamente
    }
  }, [jogadas, player]);

  const createCard = useMemo(() => {
    return cartas.map((card, i) => (
      <div className="card-game" key={i} onClick={flipCard} dataNome={card.alt}>
        <div
          className="face front-grid"
          style={{ backgroundImage: `url(${card.url})` }}
        ></div>
        <div className="face back-grid"></div>
      </div>
    ));
  }, [cartas, flipCard]);

  return (
    <div className="game">
      <main className="main-game">
        <header className="header-game">
          <span className="player">Player: {player}</span>
          <span className="player">
            Jogadas: <span className="jogadas">{jogadas}</span>
          </span>
          <Link to="/login" className="exit">
            SAIR
          </Link>
        </header>

        <div className="menu-game">
          <h1 className="text">Jogo da Memoria</h1>
        </div>

        <div className="grid-game">{createCard}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Game;
