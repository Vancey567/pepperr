import React, { useState, useEffect} from "react";
import "./Carousel.css";

import img1 from '../../images/companyCarousal/company1.png'
import img2 from '../../images/companyCarousal/company2.png'
import img3 from '../../images/companyCarousal/company3.png'
import img4 from '../../images/companyCarousal/company4.png'
import img5 from '../../images/companyCarousal/company5.png'

const images = [img1, img2, img3, img4, img5]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 4) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="shadow-div"></div>
        <div className="shadow-div1"></div>
        {images
          .slice(currentIndex, currentIndex + 4)
          .map((image, index) => (
            <img key={index} src={image} alt="Carousel" className="carousel-image" />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
