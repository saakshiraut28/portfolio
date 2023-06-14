/** @format */

import React from "react";
import Linkedin from "../assets/icons/LinkedIn.svg";
import Git from "../assets/icons/GitHub.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Curves from "../assets/vectors/curves.svg";
import Navbar from "./navbar";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
function Info() {
  return (
    <motion.div
      className="scroll-smooth snap snap-mandatory snap-y"
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ transition: { duration: "1s" } }}
    >
      <Navbar />
      <div className="relative container h-screen w-full">
        <div className="relative">
          <img src={Curves} />
        </div>
        <div className="absolute flex top-0 w-full h-screen flex-col md:flex-row justify-center items-center">
          <div className="flex w-full h-1/4 md:w-1/2  md:h-3/4  items-center justify-center text-xl font-main -mt-24">
            I’m Saakshi Raut, girl who loves
            <br />
            developing, contributing to
            <br />
            Open-source and Tea.
          </div>
          <div className="flex w-full md:w-1/2  md:h-3/4  items-center md:items-end justify-center text-xl font-main flex-row md:flex-col px-10 md:space-y-4 lg:-mt-28">
            <img
              src={Linkedin}
              className="mx-4 md:mx-0 border-2 hover:border-blue-400 p-[0.5px]"
            />
            <img
              src={Twitter}
              className="mx-4 md:mx-0 border-2 hover:border-blue-400 p-[0.5px]"
            />
            <img
              src={Git}
              className="mx-4 md:mx-0 border-2 hover:border-black p-[0.5px]"
            />
            <img
              src={Instagram}
              className="mx-4 md:mx-0 border-2 hover:border-red-400 p-[0.5px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Info;