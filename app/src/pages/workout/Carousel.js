import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const handlePrevious = () => {
      setCurrentIndex(currentIndex === 0 ? images.length - 3 : currentIndex - 1); 
    };
  
    const handleNext = () => {
      setCurrentIndex(currentIndex === images.length - 3 ? 0 : currentIndex + 1);
    };
  
    return (
        <div className="carousel">
          <button className="carousel-button" onClick={handlePrevious}>{"<"}</button>
          <div
            className={`carousel-slide`}>
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <Link to="exercise">
              <img
                key={index}
                className="carousel-image"
                src={image.path}
                alt={image.alt || `Image ${index}`}
                onClick={() => window.location.href = `workout/exercise`}
              />
              </Link>
            ))}
          </div>
          <button className="carousel-button" onClick={handleNext}>{">"}</button>
        </div>
      );
  };
  
  export default Carousel;