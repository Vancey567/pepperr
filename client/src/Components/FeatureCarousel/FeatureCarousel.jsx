import React, { useState, useEffect } from "react";
import Slider from 'react-slick';

import "./FeatureCarousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import purple from '../../images/purple-div.png';
import green from '../../images/green-div.png';

import { features } from "../../Data/featuresCarousel";

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === features.length - 5) {
        setCurrentIndex(features.length);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="feature-carousel-container">
      <div className="carousel">
        {features
          .slice(currentIndex, currentIndex + 5)
          .map((feature, index) => (
            <div className="single-carousel" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                <div className=""><img src={purple} alt="purple" /></div>
                <div className="">{feature}</div>
            </div>
          ))}
          {/* <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="single-carousel slick">
                hgjgh
                <div className=""><img src="../../images/purple-div.png" alt="purple" /></div>
                <div className="">{feature}</div>
              </div>
            ))}
          </Slider> */}
      </div>
      <div className="carousel bottom-carousel">
        {features
          .slice(currentIndex, currentIndex + 5)
          .map((feature, index) => (
            <div className="single-carousel" style={{ transform: `translateX(-${currentIndex * 90}%)`}}>
                <span className=""><img src={green} alt="green" /></span>
                <span className="">{feature}</span>
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
