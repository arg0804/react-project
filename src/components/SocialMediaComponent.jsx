import React from 'react';
import './SocialMediaComponent.css';
import facebook from './images/facebook1.png'
import insta from './images/instagram (1).png'
import twitter from './images/twitter (1).png'
import youtube from './images/youtube (1).png'

const SocialMediaComponent = () => {
  return (
    <div className="social-media-container">
      <div className="background-image">
        <div className="input-container">
          <p className='socialTitle'>
          Join our newsletter
          </p>
          <div>
          <input className='socialInput' type="text" placeholder="Enter a valid email address" />
          <button className='socialBtn'>NOTIFY ME</button>
          </div>
        <div className="social-logos">
          <a className='socialLink' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a className='socialLink' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a className='socialLink' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a className='socialLink' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
