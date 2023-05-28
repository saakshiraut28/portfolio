/** @format */

import React from "react";
import "./css/home.css";
import { Canvas } from "@react-three/fiber";
import Circle from "../components/circle";
import { OrbitControls } from "@react-three/drei";
import Orbit from "../assets/vectors/orbit2.svg";
import Ufo from "../assets/vectors/Ufo.svg";
import line from "../assets/vectors/line.svg";
import arrow from "../assets/vectors/arrow.svg";
import circle from "../assets/vectors/circle.svg";

function Home() {
  return (
    <>
      <section className="container  top-0 content h-screen w-full content-center font-main ">
        <div className="relative sticky top-0 invisible lg:visible relative h-full w-full top-0 sticky">
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{ fov: 25, position: [-10, 55, 20] }}
          >
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              rotateSpeed={3}
            />
            {/**autoRotate={true} */}
            <Circle
              radius={1}
              widseg={64}
              heightseg={32}
              x={15}
              y={0}
              z={0}
              distort={0}
            />
          </Canvas>
          <div className="absolute top-0 invisible lg:visible left-7 ">
            <img src={Orbit} />
          </div>
        </div>
        <div className="absolute inset-0 h-screen flex">
          <div className="title m-auto text-center text-[64px] leading-normal">
            <img
              src={Ufo}
              className="w-[150px] h-[230px] -mx-4 -rotate-45 animate-pulse"
            />
            <p>Hello Stranger.</p>
            <p>I'm Saakshi Raut.</p>
            <span className="flex flex-row justify-center space-x-4 text-[32px] py-2">
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-square-github"></i>
            </span>
          </div>
        </div>
        <div className="absolute body flex w-full h-full flex-col justify-center ">
          <span className=" px-4 lg:px-24 text-[32px]">
            Girl who loves developing, contributing to
            <br /> open source and tea. 👽
          </span>
        </div>
      </section>
    </>
  );
}

export default Home;
