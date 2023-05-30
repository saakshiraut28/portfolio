/** @format */

import "./index.css";
import React, { Component } from "react";
import Home from "./pages/homep";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
