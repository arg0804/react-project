import React from 'react';
import './WaveComponent.css';
import intel from './images/ai.jpg'

const WaveComponent = ({ title, waveCount }) => {
  const waves = Array.from({ length: waveCount }, (_, index) => (
    <div className="wave" key={index}>
      <div className="wave-div"></div>
    </div>
  ));

  return (
    <div className="wave-component">
      <h2 className="component-title">{title}</h2>
      <div className="wave-container">{waves}</div>

      <div className="info-div">
        <div className="info-text">Machine Learning
Sample text. Click to select the text box. Click again or double click to start editing the text.
</div>
        <div className="info-text">Edge Computing
Sample text. Click to select the text box. Click again or double click to start editing the text.
</div>
        <div className="info-text">Artificial Intelligence
Sample text. Click to select the text box. Click again or double click to start editing the text.</div>
      </div>
      <div className="image">
        <img src={intel} alt="Image" />
      </div>
    </div>
  );
};

export default WaveComponent;
