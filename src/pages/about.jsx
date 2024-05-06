/** @format */

import React, { useState, useEffect } from "react";
import Resume from "../assets/Saakshi_Resume_wo_Number.pdf";
import "./css/about.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";

let text = "saakshiraut28@gmail.com";

function About() {
  const [isCopy, setIsCopy] = useState(false);
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
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
    <motion.div
      className="text-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <div className="h-screen relative">
        <Canvas camera={{ fov: 15, position: [-2, 10, 10] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <mesh position={[1, 1, 1]}>
            <sphereBufferGeometry args={[0.8, 64, 64]} />
            <MeshDistortMaterial speed={2.5} distort={0.8}>
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
          <mesh position={[3, 1, 0]}>
            <sphereBufferGeometry args={[0.5, 64, 64]} />
            <MeshDistortMaterial speed={2} distort={0.9}>
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
          <mesh position={[3, -2, 0]}>
            <sphereBufferGeometry args={[0.5, 64, 64]} />
            <MeshDistortMaterial speed={3} distort={0.9}>
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
        </Canvas>
      </div>
      <div className="absolute top-[100px] ">
        <Navbar />

        <div className="container px-10 lg:px-20 font-main overflow-y-hidden">
          {/* TITLE */}
          <div className="para title w-full flex lg:justify-end  ">
            <span className="text-3xl font-semibold">ABOUT</span>
            <br />
          </div>
          <div className="para title2 w-full flex lg:justify-end ">
            <hr className="w-1/2 h-0.5 my-4 bg-black border-0" />
            <br />
          </div>
          {/* INTRODUCTION */}
          <div className="flex lg:px-20 pt-14 ">
            <span className="intro auto-type text-xl md:text-2xl lg:w-2/3 font-regular space-y-2 overflow-hidden leading-relaxed">
              <p className="para overflow-hidden pb-3">
                Hello, World! I am Saakshi currently pursuing Computer
                Engineering at Usha Mittal Institute of Technology, situated in
                Mumbai, India.{" "}
              </p>

              <p className="para overflow-hidden pb-3">
                I design and create web applications, contribute to open-source
                projects, and write about tech.
              </p>
              <p className="para overflow-hidden">
                PS: I believe that aliens do exist 👽.
              </p>
              <p className="para overflow-hidden flex flex-col md:flex-row md:space-x-4 my-4 lg:px-20 lg:pb-24">
                <a href={Resume} target="_blank">
                  <button
                    data-hover="Download"
                    className="py-1 my-4 w-64 border text-center rounded-full md:text-[17px] text-[17px] hover:bg-gradient-to-r hover:from-[#458CF8] hover:to-[#EB8EF4] hover:text-white hover:text-[0px] hover:after:content-[attr(data-hover)] md:hover:after:text-[17px] hover:after:text-[17px] shadow-lg"
                  >
                    Resume
                  </button>
                </a>
                <button
                  data-hover="Copy to clipboard"
                  className="py-1 my-4 w-64 border text-center rounded-full text-[20px] md:text-[17px] hover:bg-gradient-to-r hover:from-[#458CF8] hover:to-[#EB8EF4] hover:text-white hover:text-[0px] hover:after:content-[attr(data-hover)] md:hover:after:text-[17px] hover:after:text-[17px] shadow-lg"
                  onClick={copyContent}
                >
                  {!isCopy ? (
                    <a href="#" id="myText">
                      saakshiraut28@gmail.com
                    </a>
                  ) : (
                    <a href="#" id="myText">
                      Copied !!
                    </a>
                  )}
                </button>
              </p>
            </span>
          </div>

          {/* LAST LINES */}
          <div className="mt-9 hidden md:block">
            <div className="title2 w-full grid space-y-1.5 ">
              <hr className="w-full h-0.5  bg-black border-0" />
              <hr className="w-3/4 h-0.5 bg-black border-0" />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default About;
