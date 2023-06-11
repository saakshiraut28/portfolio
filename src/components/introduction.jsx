/** @format */

import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";

function Intro() {
  return (
    <>
      <div className="container h-screen w-full bg-[#ececec]">
        <Canvas camera={{ fov: 55, position: [1, 1, 1] }}>
          <Suspense>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <mesh position={[0, 0, 0]}>
              <sphereBufferGeometry args={[2, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={8} />
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["#FF9B9B", "#EB8EF4"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default Intro;
