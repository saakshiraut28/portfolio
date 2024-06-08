/** @format */

import React from "react";
import "./css/home.css";
import Info from "../components/info";
import { AnimatePresence } from "framer-motion";
import Intro from "../components/introduction.jsx";
import { motion } from "framer-motion";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
