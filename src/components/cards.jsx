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
  return (
    <>
      {/*
      <div className="invisible lg:visible flex flex-row items-center justify-center w-full h-full ">
        <div className="flex flex-col px-4 w-full lg:w-1/4 items-center md:items-end">
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
          <div className="dist w-[600px] h-[425px] ">
            <img src={Cgs} />
          </div>
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
      <div className="lg:hidden flex h-full w-full">
        <div className="">
          <div className="title text-2xl text-center font-light">
            {props.title}
          </div>
          <div className="text-lg text-center font-light">{props.desc}</div>
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
  </div>*/}
      <div className="flex px-4 w-full items-center lg:items-end  ">
        <div className="flex lg:w-1/2 w-full flex-col items-center lg:items-end">
          {/* Project Title */}
          <p className="text-2xl text-center lg:text-right font-light px-3">
            {props.title}
          </p>
          <hr className="md:w-64 -mr-4 h-0.5 my-4 bg-black border-0" />
          {/* Project Description */}
          <p className="text-lg text-justify lg:text-right md:text-center font-light px-3 md:w-full w-64 ">
            {props.desc}
            <br />
          </p>
          {/* Project Tech Stack  */}
          <div className="flex w-full font-regular   mt-10 justify-center lg:justify-end px-3">
            <p className="w-fit border bg-[#F0F0F0] rounded-md px-2 py-1">
              {props.tech}
            </p>
          </div>
          <span className="flex space-x-4 justify-center lg:justify-end my-4 px-3">
            <a href={props.gitlink}>
              <img src={Repo} />
            </a>
            <a href={props.prolink}>
              <img src={Preview} />
            </a>
          </span>
        </div>
        <div className="hidden lg:flex w-[750px] h-[450px] ">
          <img src={props.img} />
        </div>
      </div>
    </>
  );
}

export default Card;
