import './index.css';
import React, { Component } from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (<>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Projects/>}/>
    </Routes>
    </>);
}

export default App;
