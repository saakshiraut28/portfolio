/** @format */

import React from "react";
import "./css/home.css";
import Info from "../components/info";

import Intro from "../components/introduction.jsx";
import {
  Animator,
  Fade,
  ScrollContainer,
  ScrollPage,
  batch,
} from "react-scroll-motion";

function Home() {
  return (
    <div className="scroll-smooth">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade())}>
            <Intro />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade())}>
            <Info />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Home;
