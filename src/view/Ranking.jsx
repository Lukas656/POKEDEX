import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Link } from "react-router-dom";
import "./CSS/login.css";

function Ranking() {
  const ranking =
    JSON.parse(localStorage.getItem("ranking")) || [];

  return (
    <>
      <Header />

      <main className="ranking-container">
        <h1 className="ranking-title">
          🏆 Hall da Fama Pokémon
        </h1>

        {ranking.length === 0 ? (
          <div className="ranking-empty">
            Nenhum treinador registrado ainda.
          </div>
        ) : (
          <div className="ranking-list">
            {ranking.map((item, index) => (
              <div
                key={index}
                className={`ranking-card ${
                  index === 0
                    ? "gold"
                    : index === 1
                    ? "silver"
                    : index === 2
                    ? "bronze"
                    : ""
                }`}
              >
                <span className="ranking-position">
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : `#${index + 1}`}
                </span>

                <span className="ranking-player">
                  {item.player}
                </span>

                <span className="ranking-score">
                  {item.jogadas} jogadas
                </span>
              </div>
            ))}
          </div>
        )}

        <Link
          to="/login"
          className="ranking-back-button"
        >
          Voltar
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default Ranking;