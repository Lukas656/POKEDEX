import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/login.css";
import { Link } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const playerName = inputValue.trim();

    if (playerName.length < 3) {
      return;
    }

    const currentPlayer = localStorage.getItem("player");

    if (currentPlayer !== playerName) {
      localStorage.removeItem("pokemon-memory-game");
    }

    localStorage.setItem("player", playerName);

    navigate("/game");
  };

  return (
    <>
      <Header />

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <img
            src="https://claudia.abril.com.br/wp-content/uploads/2020/01/filtro-pikachu-snapchat-1.jpg?quality=70&strip=info&resize=1080,565&crop=1"
            alt="Memory"
          />

          <h1>Memory Game</h1>
        </div>

        <input
          type="text"
          placeholder="Nome"
          className="login-input"
          value={inputValue}
          onChange={handleChange}
        />

        <div className="login-actions">
          <button
            type="submit"
            className="login-button"
            disabled={inputValue.trim().length < 3}
          >
            Play
          </button>

          <Link to="/ranking" className="ranking-button">
            🏆 Ranking
          </Link>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default Login;
