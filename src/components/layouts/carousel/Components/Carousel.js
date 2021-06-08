import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
import Grid from '@material-ui/core/Grid';

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const handleStepChange = (step) => {
    setCurrImg(step);}

    const maxSteps = images.length;

  return (
    <Grid container component="main" >
    
      <Grid item xs={12}>
    <div className="carousel">
      <div
        className="carouselInner"
        
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
       
        <div className="centerleft">
          <h>{images[currImg].title}</h>
          <p1>{images[currImg].subtitle}</p1>
        </div>

        <div className="centerright">
         
        </div>

      </div>

      <AutoPlaySwipeableViews
            index={currImg}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(setCurrImg - index) <= 2 ? (
                  <img className="carouselInner" src={step.img} alt={step.label} alt="text" />
                ) : null}
                <span>{images.text}</span>
              </div>
            ))}
          </AutoPlaySwipeableViews>

        


    </div>
    </Grid>
    </Grid>
  );
}

export default Carousel;