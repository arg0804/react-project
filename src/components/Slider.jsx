import React, { useState, useEffect } from 'react';
import './Slider.css';
import newsImage from './images/slid2.jpg';
import reviewsImage from './images/slid3.jpg';
import contact from './images/slid4.jpg';
import image3 from './images/image3.jpg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideText = "about us | news | reviews | articles";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slider-content">
        <h1 className='title'>Join Accenture’s virtual program for new perspectives</h1>
        <h2 className="slider-title">{slideText}</h2>
        <a href="#" className="slider-link">Learne More</a>
      </div>
      <img src={image3} alt="About Us" className={currentSlide === 0 ? "active-slide" : ""} />
      <img src={newsImage} alt="News" className={currentSlide === 1 ? "active-slide" : ""} />
      <img src={reviewsImage} alt="Reviews" className={currentSlide === 2 ? "active-slide" : ""} />
      <img src={contact} alt="Contact" className={currentSlide === 3 ? "active-slide" : ""} />
    </div>
  );
};

export default Slider;


