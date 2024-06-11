/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MiniCard from "../components/minicard";
import Web3 from "../assets/images/Web3.png";
import Web2 from "../assets/images/Web2.png";
import Other from "../assets/images/other.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
function Projects() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".para", {
      y: 320,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.8,
      },
    });
  });
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-full h-screen">
          <Canvas camera={{ fov: 15, position: [-3, 1, 10] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <mesh position={[1, 1, 1]}>
              <circleBufferGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial speed={2.5} distort={0.8}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
            <mesh position={[-1, -1, 1]}>
              <circleBufferGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial speed={2.0} distort={0.8}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
          </Canvas>
        </div>
        <div className="top-0 absolute flex justify-center items-center bg-tranparent px-20 h-screen">
          <div className="gap-4 grid lg:grid-cols-3 my-20">
            <div className="cursor-pointer">
              <MiniCard
                img={Web3}
                title="Web3 Projects"
                desc="Collection of all my Web3 projects 🫨"
                link="/web3"
              />
            </div>
            <div className="cursor-pointer">
              <MiniCard
                img={Web2}
                title="Web2 Projects"
                desc="Checkout web development projects. 🕸️"
                link="/web2"
              />
            </div>
            <div className="cursor-pointer">
              <MiniCard
                img={Other}
                title="Other Projects"
                desc="Projects related to AI & ML, and more... 🤖"
                link="/others"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
