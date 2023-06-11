/** @format */

import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Circle(props) {
  return (
    <mesh
      rotation={[20, 0, 34]}
      position={[props.x, props.y, props.z]}
      distortion={1.3}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={[props.radius, props.widseg, props.heightseg]}
      />
      <MeshDistortMaterial
        attach="material"
        distort={props.distort}
      ></MeshDistortMaterial>
    </mesh>
  );
}

export default Circle;
