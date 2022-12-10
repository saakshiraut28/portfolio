import './index.css';
import React, { Component } from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Projects />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
