/** @format */

import React, { Component } from "react";
import Card from "../components/cards";
import Burger from "../assets/images/Burger-Builder.png";
import Oide from "../assets/images/Scryptn.png";
import Cgs from "../assets/images/CGS.png";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  MoveOut,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(Sticky(), Fade(-0.5, 1), MoveOut(0, -300));
const ZoomScrollOut = batch(Sticky());
function Projects() {
  return (
    <>
      <div className="container px-10 lg:px-20 font-main w-full h-full">
        {/* TITLE */}
        <div className="title w-full flex lg:justify-end  ">
          <span className="text-3xl font-semibold">PROJECT</span>
          <br />
        </div>
        <div className="title2 w-full flex lg:justify-end ">
          <hr className="w-1/2 h-0.5 my-4 bg-black border-0" />
          <br />
        </div>
        <div className="intro flex-row lg:px-20 pt-8 md:pt-14 w-full ">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={Cgs}
                  title="Write It - Centralized Grievance System"
                  desc="We develop a web application that would be a sort of Centralised Public Grievance portal and Monitoring System (CPGRAMS) but specifically dedicated to college(s)."
                  tech="#HTML #Tailwind CSS #Bootstrap #Php"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Hackathon_Project"
                />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={Oide}
                  title="Scryptn - Online IDE"
                  desc="Basic idea of this project to make Online IDE with registration and sign in functionality, along with that the user could save, update and even post their code."
                  tech="#HTML #Bootstrap #PHP #Tailwind"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Online-IDE"
                />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomScrollOut}>
                <Card
                  img={Burger}
                  title="Burger Assembler"
                  desc="A web-app where users can make their own burgers, by adding and removing various ingredients to it. This was the first project I created while learning react. "
                  tech="#React JS #Tailwind CSS"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Burger_Builder"
                />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>
        {/**<div className="my-4">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={Cgs}
                  title="Write It - Centralized Grievance System"
                  desc="We develop a web application that would be a sort of Centralised Public Grievance portal and Monitoring System (CPGRAMS) but specifically dedicated to college(s)."
                  tech="#HTML #Tailwind CSS #Bootstrap #Php"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Hackathon_Project"
                />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={Oide}
                  title="Scryptn - Online IDE"
                  desc="Basic idea of this project to make Online IDE with registration and sign in functionality, along with that the user could save, update and even post their code."
                  tech="#HTML #Bootstrap #PHP #Tailwind"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Online-IDE"
                />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomScrollOut}>
                <Card
                  img={Burger}
                  title="Burger Assembler"
                  desc="A web-app where users can make their own burgers, by adding and removing various ingredients to it. This was the first project I created while learning react. "
                  tech="#React JS #Tailwind CSS"
                  prolink="#"
                  gitlink="https://github.com/saakshiraut28/Burger_Builder"
                />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
  </div>**/}
      </div>
    </>
  );
}

export default Projects;
