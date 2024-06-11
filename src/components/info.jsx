/** @format */

import React, { useEffect } from "react";
import Linkedin from "../assets/icons/LinkedIn.svg";
import Git from "../assets/icons/GitHub.svg";
import Twitter from "../assets/icons/TwitterX.svg";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Animator,
  Fade,
  FadeIn,
  FadeOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";
import Navbar from "./navbar";

function Info() {
  return (
    <motion.div
      className="snap-mandatory snap-y scroll-smooth snap"
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ transition: { duration: "1s" } }}
    >
      <ScrollContainer>
        <div className="z-2 absolute w-full h-full overflow-y-none">
          <ScrollPage>
            <div className="flex justify-center items-center w-full h-screen">
              <Animator animation={batch(Fade(-1, 1), ZoomOut)}>
                <div className="text-black text-center">
                  <p className="font-brush text-[72px] md:text-[172px]">
                    Hello Human!
                  </p>
                  <br />
                  <p className="font-main text-black text-xl tracking-widest">
                    DEVELOPED BY SAAKSHI RAUT 🚀.
                  </p>
                </div>
              </Animator>
            </div>
          </ScrollPage>

          <div className="flex justify-center items-center bg-tranparent mx-auto lg:max-w-xl h-screen">
            <div className="border-slate-200 bg-grey-700 bg-opacity-30 shadow-lg backdrop-blur-lg backdrop-filter px-4 md:px-6 lg:px-16 py-4 md:py-6 lg:py- border rounded-lg 8">
              <p className="font-main font-medium text-black text-xl">
                <p className="py-2">Hi, I'm Saakshi.👽</p>
                <p className="py-2">
                  A web developer who can design and develop amazing websites
                  for you, like the one you are currently viewing ;)
                </p>
                <p className="py-2">
                  And I love building cool stuff, and currently, I'm working on
                  some Web3 projects.
                </p>
              </p>
              <div className="flex flex-row justify-center items-center space-x-4 py-4 w-full">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rautsaakshi/"
                >
                  <img
                    src={Linkedin}
                    className="mx-4 md:mx-0 p-[0.5px] hover:border-blue-400"
                  />
                </a>
                <a target="_blank" href="https://twitter.com/saakshitwt">
                  <img
                    src={Twitter}
                    className="mx-4 md:mx-0 p-[0.5px] hover:border-blue-400"
                  />
                </a>
                <a target="_blank" href="https://github.com/saakshiraut28/">
                  <img
                    src={Git}
                    className="mx-4 md:mx-0 p-[0.5px] hover:border-black"
                  />
                </a>
              </div>
              <p className="w-full font-main font-medium text-center">ily.</p>
            </div>
          </div>
        </div>
      </ScrollContainer>
    </motion.div>
  );
}

export default Info;
