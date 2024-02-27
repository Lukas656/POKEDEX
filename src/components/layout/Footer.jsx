import React from "react";
import "./footer.css";
const logo =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const Footer = () => (
  <section className="footer">
    <article className="footer-imagens">
      <img src={logo} alt="logo" className="logo" />

      <div className="redes-sociais">
        <a href="https://www.linkedin.com/in/link-lucas-santos/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Lukas656/POKEDEX" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-react"></i>
        </a>
      </div>
    </article>
    <br />
    <h2>Créditos</h2>
    <article className="creditos">
      <a
        href="https://www.youtube.com/watch?v=n2kkXup2T1c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-star">Projeto modelo: https://www.youtube.com</i>
      </a> 
      <a
        href="https://pokeapi.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-star">https://pokeapi.co</i>
      </a>
      
    </article>

    <div className="copyright">
      <span>&copy;2023 Lucas Santos Nascimento.</span>
    </div>
  </section>
);

export default Footer;
