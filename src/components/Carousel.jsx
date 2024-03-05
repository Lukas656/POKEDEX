import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"
const ComponentCarousel = () => (
  <section className="section-carousel">
  <Carousel
    showThumbs={false}
    showStatus={false} // Oculta o status (número do slide)
    showArrows={false} // Oculta os botões next e previous
    centerMode={true}
    dynamicHeight={false}
    centerSlidePercentage={100}
    infiniteLoop={true}
    autoPlay={true}
    interval={5000}
    >
    <div>
      <img src="https://http2.mlstatic.com/D_NQ_NP_817215-MLB44315211093_122020-O.webp" alt="Banner 1" />
    </div>
    <div>
      <img src="https://http2.mlstatic.com/D_NQ_NP_845602-MLB29091290363_012019-O.webp" alt="Banner 2" />
    </div>
    <div>
      <img src="https://i.pinimg.com/736x/00/41/09/004109ee84c353253ce3851e2f83bd92.jpg" alt="Banner 3" />
    </div>
    <div>
      <img src="https://i.ibb.co/2ywwRx3/splash-Banner-pokemon.jpg" alt="Banner 4" />
    </div>
  </Carousel>
    </section>
);

export default ComponentCarousel;
