/** @format */

import React, { Suspense } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
function Msg() {
  return (
    <motion.div
      className="overflow-hidden "
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <div className="h-screen w-full relative">
        <Canvas camera={{ fov: 45, position: [-2, 2, 2] }}>
          <Suspense>
            <OrbitControls enableZoom={false} enableRotate={true} />
            <ambientLight intensity={1} />
            <mesh position={[-3, -0.5, 0]}>
              <sphereBufferGeometry args={[2, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={0.2}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#FF9B9B", "#EB8EF4"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
            <mesh position={[3, 0.5, 0]}>
              <sphereBufferGeometry args={[2.6, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={0.3}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#FF9B9B", "#EB8EF4"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute top-0 h-screen w-full">
        <Navbar />
        <div className="flex  w-full justify-center items-center">
          <div className="flex flex-col w-1/2 bg-black px-16 py-16 bg-gray-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border border-black-200  p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-4"
              id="grid-last-name"
              type="text"
              placeholder="doe@xyz.abc"
            />
            <textarea
              className="appearance-none block w-full min-h-[300px] bg-white-200 text-gray-700 border border-black-200  p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-4"
              id="grid-last-name"
              type="text"
              placeholder="Hello! Enter your text here."
            />
          </div>
        </div>
      </div>
      <div className="-mt-14">
        <Footer />
      </div>
    </motion.div>
  );
}

export default Msg;
