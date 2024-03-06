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

  const handleSubmit = () => {
      localStorage.setItem("player", inputValue);
      history("/game");
  };

  const sendForm= (event)=>{
    event.preventDefault(); // previne o envio do formulario e recarregando a pagina
    
    
    fetch("https://api.sheetmonkey.io/form/gtUhsQqMZCy3eFs6nZ7LB8", {
      method: "post",
      headers: {
        Accept: "aplication/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Nome: inputValue }),
    }).then(()=> handleSubmit())
  }

  return (
    <>
      <Header />
      <form className="login-form">
        <div className="login-header">
          <img
            src="https://th.bing.com/th/id/OIG1.dUpJ7EtV4YKsrHBWSCka?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt="Memory"
          />
          <h1>Memory Game</h1>
        </div>
        <input
          type="text"
          name="Usuarios Pokedex"
          placeholder="Nome"
          className="login-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          onClick={sendForm}
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
