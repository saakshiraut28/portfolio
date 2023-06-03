/** @format */

import React, { Component } from "react";
import Card from "../components/cards";
import Burger from "../assets/images/Burger-Builder.png";
import Oide from "../assets/images/Scryptn.png";
import Cgs from "../assets/images/CGS.png";

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
        <div className="h-full space-y-8">
          <Card
            img={Cgs}
            title="Write It - Centralized Grievance System"
            desc="We develop a web application that would be a sort of Centralised Public Grievance portal and Monitoring System (CPGRAMS) but specifically dedicated to college(s)."
            tech="#HTML #Tailwind CSS #Bootstrap #Php"
            prolink="#"
            gitlink="https://github.com/saakshiraut28/Hackathon_Project"
          />

          <Card
            img={Oide}
            title="Scryptn - Online IDE"
            desc="Basic idea of this project to make Online IDE with registration and sign in functionality, along with that the user could save, update and even post their code."
            tech="#HTML #Bootstrap #PHP #Tailwind"
            prolink="#"
            gitlink="https://github.com/saakshiraut28/Online-IDE"
          />

          <Card
            img={Burger}
            title="Burger Assembler"
            desc="A web-app where users can make their own burgers, by adding and removing various ingredients to it. This was the first project I created while learning react. "
            tech="#React JS #Tailwind CSS"
            prolink="#"
            gitlink="https://github.com/saakshiraut28/Burger_Builder"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
