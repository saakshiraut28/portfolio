/** @format */

import React, { Component, useEffect } from "react";
import Burger from "../assets/images/Burger-Builder.png";
import Cgs from "../assets/images/CGS.png";
import Oide from "../assets/images/Scryptn.png";
import Repo from "../assets/icons/Repository.png";
import Preview from "../assets/icons/Code.png";
import Overlay from "../assets/images/overlay.png";
import hoverEffect from "hover-effect";

function Card(props) {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#distortion"),
      intentsity: 1,
      image1: props.img,
      image2: props.img,
      displacementImage: Overlay,
    });
  });
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full py-8 m-4">
        <div className="flex flex-col px-4 w-1/4 items-center md:items-end">
          <p className="text-2xl text-center font-light">{props.title}</p>
          <hr className="w-64 -mr-4 h-0.5 my-4 bg-black border-0" />
          <p className="text-lg text-center md:text-right font-light">
            {props.desc}
            <br />
          </p>
          <p className="w-fit border font-regular rounded-md px-2 py-1 bg-[#F0F0F0] mt-10 text-center md:text-right">
            {props.tech}
          </p>
        </div>
        <div className="grid">
          <div className="dist w-[600px] h-[425px]" id="distortion"></div>
          <div className="w-full flex justify-center py-2">
            <span className="flex space-x-4">
              <a href={props.gitlink}>
                <img src={Repo} />
              </a>
              <a href={props.prolink}>
                <img src={Preview} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
