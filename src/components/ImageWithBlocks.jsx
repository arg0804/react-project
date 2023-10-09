import React from 'react';
import './ImageWithBlocks.css';
import robot from './images/robot.jpg';
import logo1 from './images/bitcoin.png';
import logo2 from './images/5g.png';
import logo3 from './images/artificial-intelligence.png';
import logo4 from './images/network.png';

const ImageWithBlocks = () => {
  return (
    <div className="image-with-blocks">
      <div className="image-container">
        <img src={robot} alt="" />
        <div className="blocks-container">
          <div className="block">
            <img src={logo1} alt="Logo 1" />
            <p>BLOCKCHAIN</p>
          </div>
          <div className="block">
            <img src={logo2} alt="Logo 2" />
            <p>5G NETWORK</p>
          </div>
          <div className="block">
            <img src={logo3} alt="Logo 3" />
            <p>AI PRODUCTS</p>
          </div>
          <div className="block">
            <img src={logo4} alt="Logo 4" />
            <p>AUTOMATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithBlocks;
