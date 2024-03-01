import React from "react";
// import { Link } from "react-router-dom";
import "./notfound.css";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

function Login() {

  return (
    <>
    <Header />
   
     <section className="info">
      <h1>Ops...</h1>
      <h1>pagina não Encontrada!</h1>
      <h5>Ainda Estou Trabalhando nisto....</h5>

     </section>

    <Footer />
  </>
  );
}

export default Login;
