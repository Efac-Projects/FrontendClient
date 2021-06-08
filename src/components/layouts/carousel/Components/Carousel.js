import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
       
        <div className="centerleft">
          <h>{images[currImg].title}</h>
          <p1>{images[currImg].subtitle}</p1>
        </div>
      </div>
    </div>
  );
}

export default Carousel;