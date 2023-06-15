/** @format */

import React, { Component } from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./css/about.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { TweenMax, Power3, gsap } from "gsap";

let text = "saakshiraut28@gmail.com";
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

function About() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".para", {
      y: 320,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.8,
      },
    });
  });

  return (
    <motion.div
      className="text-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="container px-10 lg:px-20 font-main overflow-y-hidden">
        {/* TITLE */}
        <div className="title w-full flex lg:justify-end  ">
          <span className="text-3xl font-semibold">ABOUT</span>
          <br />
        </div>
        <div className="title2 w-full flex lg:justify-end ">
          <hr className="w-1/2 h-0.5 my-4 bg-black border-0" />
          <br />
        </div>
        {/* INTRODUCTION */}
        <div className="flex lg:px-20 pt-14 ">
          <span className="intro auto-type text-xl md:text-2xl lg:w-2/3 font-regular space-y-2 overflow-hidden leading-relaxed">
            <p className="para overflow-hidden pb-3">
              Hello, World! I am Saakshi currently pursuing Computer Engineering
              at Usha Mittal Institute of Technology, situated in Mumbai, India.{" "}
            </p>

            <p className="para overflow-hidden pb-3">
              I design and create web applications, contribute to open-source
              projects, and write about tech.
            </p>
            <p className="para overflow-hidden">
              PS: I believe that aliens do exist 👽.
            </p>
            <p className="para overflow-hidden flex flex-col md:flex-row md:space-x-4 my-4 lg:px-20 lg:pb-24">
              <button
                data-hover="Download"
                className="py-1 my-4 w-64 border text-center rounded-full md:text-[20px] text-[17px] hover:bg-black hover:text-white hover:text-[0px] hover:after:content-[attr(data-hover)] md:hover:after:text-[20px] hover:after:text-[17px]"
              >
                <a href="#">Resume</a>
              </button>
              <button
                data-hover="Copy to clipboard"
                className="py-1 my-4 w-64 border text-center rounded-full text-[20px] md:text-[17px] hover:bg-black hover:text-white hover:text-[0px] hover:after:content-[attr(data-hover)] md:hover:after:text-[20px] hover:after:text-[17px]"
                onClick={copyContent}
              >
                <a href="#" id="myText">
                  saakshiraut28@gmail.com
                </a>
              </button>
            </p>
          </span>
        </div>

        {/* LAST LINES */}
        <div className="mt-9 hidden md:block">
          <div className="title2 w-full grid space-y-1.5 ">
            <hr className="w-full h-0.5  bg-black border-0" />
            <hr className="w-3/4 h-0.5 bg-black border-0" />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default About;
