/** @format */

import React from "react";
import "./css/home.css";
import { Canvas } from "@react-three/fiber";
import Circle from "../components/circle";
import { OrbitControls } from "@react-three/drei";
import Background from "../components/bg";

function home() {
  return (
    <>
      <section className="content px-4 h-screen w-full content-center">
        <div className="relative h-full w-full top-0">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <OrbitControls enableZoom={false} rotation={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={0.5} />
            {/* big circle */}
            <Circle
              radius={2}
              widseg={64}
              heightseg={32}
              x={0}
              y={0}
              z={0}
              distort={0.1}
            />
            {/* left-top */}
            <Circle
              radius={0.5}
              widseg={64}
              heightseg={32}
              x={2}
              y={1.5}
              z={0}
              distort={0.6}
            />
            {/* right-bottom */}
            <Circle
              radius={1}
              widseg={64}
              heightseg={32}
              x={-3}
              y={-1.5}
              z={0}
              distort={0.3}
            />
            {/* right-top */}
            <Circle
              radius={0.9}
              widseg={64}
              heightseg={32}
              x={-1.5}
              y={2}
              z={0}
              distort={0.5}
            />
            <Background />
          </Canvas>
        </div>
        <div className="">
          <div className="absolute top-0 translate-y-full translate-x-1/2 rounded-lg p-8 px-16 backdrop-blur-3xl backdrop-opacity-72 border border-gray-300 shadow-xl ">
            <span className="font-lora text-7xl">
              <span className="">Welcome</span>.
            </span>
            <br />
            <span className="font-lora text-xl">
              Full-stack Web Developer | Open-source Contributor | Designer |
              Learner.
            </span>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default home;
