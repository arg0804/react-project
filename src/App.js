import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ImageWithBlocks from './components/ImageWithBlocks';
import WaveComponent from './components/WaveComponent';
import VerticalListComponent from './components/VerticalListComponent';
import SlideComponent from './components/SlideComponent';
import SocialMediaComponent from './components/SocialMediaComponent';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/slider" element={<Slider />} />
          <Route path="/vertical-list" element={<VerticalListComponent />} />
          <Route path="/social-media" element={<SocialMediaComponent />} />
        </Routes>
      <Slider />
      <ImageWithBlocks />
      <WaveComponent title="Technology Of The Future" waveCount={5} />
      <VerticalListComponent />
      <SlideComponent />
      <SocialMediaComponent />
    </div>
  );
}

export default App;