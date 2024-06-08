/** @format */

import React, { useEffect, useState } from "react";
import Card from "../components/cards";
import Burger from "../assets/images/Burger-Builder.png";
import Oide from "../assets/images/Scryptn.png";
import Cgs from "../assets/images/CGS.png";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  MoveOut,
} from "react-scroll-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import MiniCard from "../components/minicard";


function Projects() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <><div className={ `relative h-screen inset-0 transition-all duration-2000 ease-in-out ${isLoaded ? 'w-full h-full bg-[#A9A7FF]' : 'w-0 h-full'}` }>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="gap-4 grid lg:grid-cols-3 my-20">
          <div className="cursor-pointer"><MiniCard title='Web3 Projects' desc='Collection of all my Web3 projects 🫨' /></div>
          <div className="cursor-pointer"><MiniCard title='Web2 Projects' desc='Collection of all my Web devel projects 🫨' /></div>
          <div className="cursor-pointer"><MiniCard title='Other Projects' desc='Collection of all my Web3 projects 🫨' /></div>
        </div>
      </div>
      <Footer />
    </div></>
  );
}
export default Projects;
