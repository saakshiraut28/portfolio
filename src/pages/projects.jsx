/** @format */

import React, { Component } from "react";
import Card from "../components/cards";

function Projects() {
  return (
    <>
      <div className="container px-10 lg:px-20 font-main h-full">
        {/* TITLE */}
        <div className="title w-full flex lg:justify-start  ">
          <span className="text-3xl font-semibold">PROJECTS</span>
          <br />
        </div>
        <div className="title2 w-full flex lg:justify-start ">
          <hr className="w-1/2 h-0.5 my-3 bg-black border-0" />
          <br />
        </div>
        <div className="h-full">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Projects;
