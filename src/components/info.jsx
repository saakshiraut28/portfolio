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
      className="scroll-smooth snap snap-mandatory snap-y"
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ transition: { duration: "1s" } }}
    >
      <ScrollContainer>
        <div className="w-full h-full absolute z-2 overflow-y-none">
          <ScrollPage>
            <div className="flex h-screen w-full justify-center items-center">
              <Animator animation={batch(Fade(-1, 1), ZoomOut)}>
                <div className="text-center text-black">
                  <p className="font-brush text-[72px] md:text-[172px]">
                    Hello Human!
                  </p>
                  <br />
                  <p className="text-black font-main text-xl tracking-widest">
                    DEVELOPED BY SAAKSHI RAUT 🚀.
                  </p>
                </div>
              </Animator>
            </div>
          </ScrollPage>

          <div className="flex justify-center items-center lg:max-w-xl mx-auto bg-tranparent h-screen">
            <div className="border border-slate-200	 bg-grey-700 bg-opacity-30 backdrop-filter backdrop-blur-lg  px-4 md:px-6 lg:px-16 py-4 md:py-6 lg:py- 8 rounded-lg shadow-lg">
              <p className="text-black font-main text-xl font-medium">
                <p className="py-2">Hi, I'm Saakshi.👽</p>
                <p className="py-2">
                  A web developer who can design and develop amazing websites
                  for you, like the one you are currently viewing ;)
                </p>
                <p className="py-2">
                  I love building cool stuff, and currently, I'm working on some
                  Web3 projects.
                </p>
              </p>
              <div className="w-full flex flex-row items-center justify-center space-x-4 py-4">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rautsaakshi/"
                >
                  <img
                    src={Linkedin}
                    className="mx-4 md:mx-0 hover:border-blue-400 p-[0.5px]"
                  />
                </a>
                <a target="_blank" href="https://twitter.com/saakshitwt">
                  <img
                    src={Twitter}
                    className="mx-4 md:mx-0 hover:border-blue-400 p-[0.5px]"
                  />
                </a>
                <a target="_blank" href="https://github.com/saakshiraut28/">
                  <img
                    src={Git}
                    className="mx-4 md:mx-0 hover:border-black p-[0.5px]"
                  />
                </a>
              </div>
              <p className="w-full text-center font-medium font-main">
                Btw, you can drag and rotate the background 😁
              </p>
            </div>
          </div>
        </div>
      </ScrollContainer>
    </motion.div>
  );
}

export default Info;
