/** @format */

import React, { Component } from "react";
import welcome from "../assets/images/Welcome.png";
import Repo from "../assets/icons/Repository.png";
import Preview from "../assets/icons/Code.png";

function Card() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full py-28">
        <div className="flex flex-col px-4 w-1/4 items-center md:items-end">
          <p className="text-2xl text-center font-light">Project Title</p>
          <hr className="w-64 -mr-4 h-0.5 my-4 bg-black border-0" />
          <p className="text-lg text-center md:text-right font-light">
            Lorem Ipsum is simply dummy text of the printing and
            typesettingetewrwr industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer.
            <br />
          </p>
          <p className="w-fit border font-regular rounded-md px-2 py-1 bg-[#F0F0F0] mt-10 text-center md:text-right">
            #React #MERN #html&css
          </p>
        </div>
        <div>
          <img className="w-lg h-[450px]" src={welcome} />
          <div className="w-full flex justify-center py-2">
            <span className="flex space-x-4">
              <img src={Repo} /> <img src={Preview} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
