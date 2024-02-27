import React from "react";
import "./footer.css";
const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const Footer = () => (
  <section className="footer">
    <article className="footer-imagens">
      <img src={logo} alt="logo" className="logo"/>

      <div className="redes-sociais">
        <a href="https://www.linkedin.com/in/link-lucas-santos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Lukas656/Presentation/tree/main" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://wa.me/5511953819876" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/lucas.santos.2002/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer"><i className="fab fa-react"></i></a>
      </div>
    </article>
    <br/>
    <h2>Créditos</h2>
    <article className="creditos">
      <a href="https://www.sky.com.br/" target="_blank" rel="noopener noreferrer"><i className="fab fa-star">Projeto modelo SKY.com.br</i></a>
      <a href="https://www.bing.com/saves?FORM=O2PB01" target="_blank" rel="noopener noreferrer"><i className="fab fa-star">IA Microsoft Bing</i></a>
      <a href="https://studio.tailorbrands.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-star">Logo feita em..</i></a>
    </article>

    <div className="copyright">
      <span>&copy;2023 Lucas Santos Nascimento.</span>
    </div>
  </section>
);

export default Footer;
