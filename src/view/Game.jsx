import  React, { useState } from "react";
import $ from "jquery";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./game.css";
function Game() {
    const [flippedCards, setFlippedCards] = useState([]);

    const handleCardClick = (event) => {
      const clickedCard = event.currentTarget;
      // Verifica se já existem duas cartas viradas
      if (flippedCards.length < 2) {
        // Verifica se a carta já está virada
        if (!flippedCards.includes(clickedCard)) {
          // Adiciona a carta ao estado de cartas viradas
          setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
          // Gira a carta clicada
          $(clickedCard).find(".card-inner").css("transform", "rotateY(180deg)");
        }
      }
    };





  $(document).ready(function () {
    // Embaralhe as cartas
    var cards = $(".card").toArray();
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    $(".cards").html(cards);

   
  });

  return (
    <>
      <Header />

      <section className="cards">
        <div class="card" data-pokemon="pikachu" onClick={handleCardClick}>
          <div class="card-inner">
            <div class="card-front">
              <p>POKÉ-CARD</p>
            </div>
            <div class="card-back">
              <p id="nome">Pikachu</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu"
              />
            </div>
          </div>
        </div>
        <div class="card" data-pokemon="bulbasaur" onClick={handleCardClick}>
          <div class="card-inner">
            <div class="card-front">
              <p>POKÉ-CARD</p>
            </div>
            <div class="card-back">
              <p id="nome">Bulbasaur</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
              />
            </div>
          </div>
        </div>
        <div class="card" data-pokemon="charmander" onClick={handleCardClick}>
          <div class="card-inner">
            <div class="card-front">
              <p>POKÉ-CARD</p>
            </div>
            <div class="card-back">
              <p id="nome">charmander</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                alt="Charmander"
              />
            </div>
          </div>
        </div>
        <div class="card" data-pokemon="squirtle" onClick={handleCardClick}>
          <div class="card-inner">
            <div class="card-front">
              <p>POKÉ-CARD</p>
            </div>
            <div class="card-back">
              <p id="nome">squirtle</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                alt="Squirtle"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Game;
