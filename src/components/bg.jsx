/** @format */

import React, { Component } from "react";
import circleImg from "../assets/vectors/circle1.png";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

function Background({ count = 1000 }) {
  const CircleImg = useLoader(THREE.TextureLoader, circleImg);
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    return new THREE.BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        map={CircleImg}
        size={0.1}
        color={0x000000}
        sizeAttenuation={true}
        alphaTest={0.5}
      />
    </points>
  );
}

export default Background;
