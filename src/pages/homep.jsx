/** @format */

import React, { useRef, Suspense } from "react";
import "./css/home.css";
import Curves from "../assets/vectors/curves.svg";
import Linkedin from "../assets/icons/LinkedIn.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Git from "../assets/icons/GitHub.svg";
import Twitter from "../assets/icons/Twitter.svg";

function Home() {
  return (
    <>
      <section className="container  top-0 content h-screen w-full content-center font-main">
        <div className="relative top-[100px] leading-tight w-full	">
          <img src={Curves} />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-auto w-96 justify-center md:justify-start items-center px-4 md:mt-4 ">
            <span className="text-xl md:px-24">
              I’m Saakshi Raut, girl who loves <br />
              developing, contributing to
              <br />
              Open-source and Tea.
              <br />
              <div className="py-1 my-4 border text-center rounded-full text-[17px] hover:bg-black hover:text-white">
                <a href="#">saakshiraut28@gmail.com</a>
              </div>
            </span>
          </div>
          <div className="flex md:justify-end md:items-center flex-col px-8 space-y-3">
            <img
              src={Linkedin}
              className="hover:w-[35px] hover:h-[35px] hover:mr-4"
            />
            <img
              src={Twitter}
              className="hover:w-[35px] hover:h-[35px] hover:mr-4"
            />
            <img
              src={Git}
              className="hover:w-[35px] hover:h-[35px] hover:mr-4"
            />
            <img
              src={Instagram}
              className="hover:w-[35px] hover:h-[35px] hover:mr-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
