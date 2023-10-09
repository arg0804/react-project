import React, { useState, useEffect } from 'react';
import './SlideComponent.css'
import smallPicture from './images/female.jpg';
import blue from './images/blue.jpg';


const SlideComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
          title: 'Simplicity Is Key',
          description: 'Simplicity is the elegant art of distillation, where every superfluous element is gently stripped away, revealing the pure essence within. It is the quiet strength that speaks volumes in its understated grace. ',
        },
        {
          title: 'Online Classes',
          description: 'Online classes represent a dynamic evolution in education, breaking down the barriers of physical distance and time constraints. They offer a flexible and accessible avenue for knowledge acquisition.',
        },
      ];
  
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      };

      useEffect(() => {
        const slideTimeout = setTimeout(() => {
          nextSlide();
        }, 5000);
    
        return () => {
          clearTimeout(slideTimeout);
        };
      }, [currentSlide]);
  
      return (
        <div className="slide-container">
            <div>
                <p className='tech'>Technology Of The Future</p>
            </div>
          <div className="slide">
            <button className="slide-control left-arrow" onClick={prevSlide}>
              &lt;
            </button>
            <div className="slide-part">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
            </div>
            <button className="slide-control right-arrow" onClick={nextSlide}>
              &gt;
            </button>
          </div>
          <div className="small-image">
            <img src={smallPicture} alt="Small" />
          </div>
          <div className="large-image">
            <img src={blue} alt="Large" />
          </div>
        </div>
      );
  };

export default SlideComponent;
