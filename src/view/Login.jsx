import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/login.css";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const history = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // previne o envio do formulario e recarregando a pagina
    localStorage.setItem("palyer", inputValue);
    history("/game");
  };

  return (
    <>
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <img src="https://th.bing.com/th/id/OIG1.dUpJ7EtV4YKsrHBWSCka?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Memory" />
          <h1>Memory Game</h1>
        </div>
        <input
          type="text"
          placeholder="Nome"
          className="login-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="login-button"
          disabled={inputValue.length <= 2}
        >
          Play
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Login;
