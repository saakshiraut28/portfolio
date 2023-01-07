import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei';


function Projects() {
    return ( <>
    <div className='h-screen'>
        <div className='grid bg-black top-0 h-full'>
            <Canvas>
            <ambientLight intensity={2} />
            <spotLight />
            <mesh>
                <sphereBufferGeometry />
                <MeshDistortMaterial attach="material" color={'#575757'} distort={5} speed={2}/>
            </mesh>
            </Canvas>    
        </div>
        <div className='absolute top-0 grid grid-cols-3 h-full'>
            <div className='grid'>
                <Canvas
                      shadowMap
                      >
                    <ambientLight intensity={1} />
                    <directionalLight
                        intensity={1}
                        castShadow
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                    />
                    <mesh>
                        <sphereGeometry />
                        <MeshDistortMaterial attach="material" distort={0.3} speed={2}>
                            <GradientTexture
                            stops={[0, 1]} // As many stops as you want
                            colors={['#FFA4A4', '#EA84FB']} // Colors need to match the number of stops
                            size={1024} // Size is optional, default = 1024
                            />
                        </MeshDistortMaterial>
                    </mesh>
                </Canvas>
            </div>
        </div>
        </div>
    </> );
}

export default Projects;