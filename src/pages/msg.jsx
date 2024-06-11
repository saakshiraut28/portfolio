/** @format */

import React, { Suspense, useEffect } from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

import { gsap } from "gsap";
function Msg() {
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
      className="text-black overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <div className="w-full h-screen">
        <Navbar />

        <div className="flex md:flex-row flex-col justify-center items-center w-full h-full">
          <div className="flex justify-start py-8 w-full md:w-3/4 para">
            <span className="relative font-black font-main text-[#e6f3ff] text-6xl md:text-[150px] leading-none">
              wanna
              <br /> work <br /> with me? <br />
            </span>
            <span className="absolute px-4 md:py-32 md:w-1/2 font-main text-[24px] text-justify md:text-[32px] md:text-center md:leading-loose">
              Have a great idea to discuss?
              <br />
              Feel free to reach out to me by sending a message. 🖋️
              <br />
              <span className="border-b-4 border-black hover:border-b-0 transition-all">
                {" "}
                saakshiraut28@gmail.com
              </span>
            </span>
          </div>
          <div className="md:text-right md:-ml-32 font-main text-[24px] text-center md:text-[32px] leading-loose para">
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
              Linkedin
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
      <div className="-mt-14"></div>
    </motion.div>
  );
}

export default Msg;
