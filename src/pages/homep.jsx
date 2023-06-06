/** @format */

import React from "react";
import "./css/home.css";
import Curves from "../assets/vectors/curves.svg";
import Linkedin from "../assets/icons/LinkedIn.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Git from "../assets/icons/GitHub.svg";
import Twitter from "../assets/icons/Twitter.svg";

function Home() {
  return (
    <>
      <div className="container h-full w-full">
        <div className="relative">
          <img src={Curves} />
        </div>
        <div className="absolute flex top-0 w-full h-full flex-col md:flex-row justify-center">
          <div className="flex w-full h-1/4 md:w-1/2  md:h-3/4  items-center justify-center text-xl font-main">
            I’m Saakshi Raut, girl who loves
            <br />
            developing, contributing to
            <br />
            Open-source and Tea.
          </div>
          <div className="flex w-full md:w-1/2  md:h-3/4  items-center md:items-end justify-center text-xl font-main flex-row md:flex-col px-10 md:space-y-4">
            <img src={Linkedin} className="mx-4 md:mx-0 border-1" />
            <img src={Twitter} className="mx-4 md:mx-0 " />
            <img src={Git} className="mx-4 md:mx-0 " />
            <img src={Instagram} className="mx-4 md:mx-0 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
