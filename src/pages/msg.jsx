/** @format */

import React, { Suspense, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

import { gsap } from "gsap";
function Msg() {
  /* useEffect(() => {
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
  });*/
  return (
    <motion.div
      className="overflow-hidden text-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <div className="h-screen w-full">
        <Navbar />

        <div className="flex flex-col md:flex-row w-full justify-center items-center ">
          <div className="para flex md:w-3/4 w-full justify-start py-8  ">
            <span className="relative  font-main text-6xl md:text-[150px] text-[#e6f3ff] font-black leading-none">
              wanna
              <br /> work <br /> with me? <br />
            </span>
            <span className="absolute text-[24px] md:text-[32px] font-main  md:w-1/2 text-justify md:text-center md:py-32 md:leading-loose px-4">
              Having a great idea to discuss?
              <br />
              Just drop me a message at following email:
              <br />
              <span className="border-b-4 border-black hover:border-b-0 transition-all">
                {" "}
                saakshiraut28@gmail.com
              </span>
            </span>
          </div>
          <div className="para text-[24px] md:text-[32px] font-main md:-ml-32 leading-loose md:text-right text-center">
            Follow me on:
            <br />
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://github.com/saakshiraut28/"
            >
              {" "}
              Github
            </a>
            <br />{" "}
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://www.linkedin.com/in/rautsaakshi/"
            >
              {" "}
              LinkedIn
            </a>
            <br />{" "}
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://twitter.com/saakshitwt"
            >
              {" "}
              Twitter{" "}
            </a>
            <br />
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://medium.com/@saakshiraut28"
            >
              {" "}
              Medium{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="-mt-14">
        <Footer />
      </div>
    </motion.div>
  );
}

export default Msg;
