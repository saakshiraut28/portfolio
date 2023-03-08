import './index.css';
import React, { Component } from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Parallax pages={1}>
        {/*
        <ParallaxLayer offset={0}>
          <Home />
  </ParallaxLayer>*/}
        <ParallaxLayer offset={0}>
          <Projects />
  </ParallaxLayer>
    {/*
        <ParallaxLayer offset={1}>
          <About />
        </ParallaxLayer>*/}
      </Parallax>
    </div>
  );
}

export default App;
