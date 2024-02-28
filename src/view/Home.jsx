import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ComponetCarousel  from "../components/Carousel.jsx";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <ComponetCarousel/>
      </section>
      <Footer />
    </>
  );
}

export default Home;
