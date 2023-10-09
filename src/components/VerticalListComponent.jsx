import React, { useState } from 'react';
import './VerticalListComponent.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import bookmark from './images/future.jpg';

const VerticalListComponent = () => {
  const handleLearnMoreClick = (searchQuery) => {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;

    window.open(googleSearchURL, '_blank');
  };
  const handleLearnMoreClickCrypto = (searchQuery) => {
    const googleSearchURL = `https://crypto.com/${encodeURIComponent(
      searchQuery
    )}`;

    window.open(googleSearchURL, '_blank');
  };

  const handleLearnMoreCourse = (searchQuery) => {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;

    window.open(googleSearchURL, '_blank');
  };

  const handleLearnMoreSupport = (searchQuery) => {
    const googleSearchURL = `https://levity.ai/blog/ai-for-customer-support=${encodeURIComponent(
      searchQuery
    )}`;

    window.open(googleSearchURL, '_blank');
  };


  return (
    <div className="verticalContainer">
      <div className="verticalImage">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="verticalImage">
        <img src={image2} alt="Image 2" />
        <div className="infoDiv">
          <div className="infoBlock">
            <div className="infoNumber">01</div>
            <div className="infoTitle">Future</div>
            <div className="infoText">
              Click to select the text box. Click again or double click to start editing.
            </div>
            <button className="infoButton" onClick={() => handleLearnMoreClick('Future')}>
              LEARN MORE
            </button>
          </div>
          <div className="infoBlock">
                <div className="infoNumber">02</div>
                <div className="infoTitle">Crypto</div>
                <div className="infoText">
                  Click to select the text box. Click again or double click to start editing the text.
                </div>
                <button className="infoButton" onClick={() =>  handleLearnMoreClickCrypto('Crypto')}>LEARN MORE</button>
              </div>
              <div className="infoBlock">
                <div className="infoNumber">03</div>
                <div className="infoTitle">Courses</div>
                <div className="infoText">
                  Sample text. Click to select the text box. Click again or double click to start editing the text.
                </div>
                <button className="infoButton"  onClick={() => handleLearnMoreCourse('Courses')}>LEARN MORE</button>
              </div>
              <div className="infoBlock">
                <div className="infoNumber">04</div>
                <div className="infoTitle">Support</div>
                <div className="infoText">
                  Sample text. Click to select the text box. Click again or double click to start editing the text.
                </div>
                <button className="infoButton"  onClick={() => handleLearnMoreSupport('Support')}>LEARN MORE</button>
              </div>
        </div>
      </div>
      <div className="verticalImage">
        <div className="additionalDiv">
          <img src={bookmark} alt="img" className="secondImage" />
        </div>
        <div className="image3">
          <img className="img3" src={image3} alt="Image 3" />
        </div>
        <div className="info">
          <div className="infoB">
            <div className="infoT">AI & Digital Platform</div>
            <button className="infoBut" onClick={() => handleLearnMoreClick('AI & Digital Platform')}>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalListComponent;
