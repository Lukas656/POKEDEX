import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ComponetCarousel from "../components/Carousel.jsx";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <ComponetCarousel />
        <br />
        <main>
          <h1 className="main-home">Sejam Bem Vindo</h1>
          <h3>Projeto Site Pokemons</h3>
          <div>
            <p id="panel">
              Neste Projeto vou apresentar a você este site totalmente funcional
              e responsivo tanto a Celular quento a computadores, criado com{" "}
              <strong>React.js</strong> e Consumindo os dados da{" "}
              <strong>PokéAPI</strong>.
              <br />
              Aqui te mostrarei como foi o processo de Criação deste projeto e
              se por acaso tiver enteresse em reproduzi-lo ficarei feliz em ter
              inspirado assim como fui inspirado por alguém para fazer este.
            </p>
            <div className="apresentacao">
              <div>
                <h1>Pokedex</h1>
                <Link to="/app">Ver mais...</Link>
                <img
                  src="https://i.ibb.co/Q6yryjH/Captura-de-tela-2024-03-06-114417.png"
                  alt="Pokedex"
                  className="img-home"
                />
                <p>
                  Nesta pagina você pode pesquisar seu pokemon preferido e
                  favoritar-lo.
                </p>
              </div>
              <div>
                <h1>Login</h1>
                <Link to="/login">Ver mais...</Link>
                <img
                  src="https://i.ibb.co/cTzpLWr/Captura-de-tela-2024-03-06-113850.png"
                  alt="Login"
                  className="img-home"
                />
                <p>
                  Nesta pagina você Faz o Login para participar do jogo de
                  Quebra Cabeça.
                </p>
              </div>
              <div>
                <h1>Jogo</h1>
                <Link to="/login">Ver mais...</Link>
                <img
                  src="https://i.ibb.co/SKs979h/Captura-de-tela-2024-03-06-113909.png"
                  alt="Pokedex"
                  className="img-home"
                />
                <p>
                  Nesta pagina você joga o quebra cabeça com os persoagens
                  pokemons com o contador de jogadas, pode jogar contra um
                  colega e vence quem resolver o jogo com o menor numero de
                  jogadas.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Home;
