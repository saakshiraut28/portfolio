/** @format */

import "./index.css";
import React from "react";
import Home from "./pages/homep";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Msg from "./pages/msg";
import Intro from "./components/introduction";
import Web3 from "./components/projects/web3";
import Web2 from "./components/projects/web2";
import Ai from "./components/projects/ml";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/msg" element={<Msg />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/web2" element={<Web2 />} />
          <Route path="/others" element={<Ai />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
