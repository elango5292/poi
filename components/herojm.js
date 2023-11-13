"use client"

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Float, OrbitControls } from '@react-three/drei';
import debounce from 'lodash/debounce';
import { motion } from 'framer-motion';

export default function Home({w}) {
  

    return (
      <div>
                  
  <div className='block md:hidden'><Heromob/></div>
  
          
      </div>
    );
  }
  
  function Scene() {
      const myMesh = useRef();
      const gltf = useLoader(FBXLoader, '/fb.fbx');
    
      return (
        <group>
          <primitive object={gltf} ref={myMesh} rotation={[0.5, -0.2, -2.3]} scale={[0.9, 0.9, 0.9]}/>
        </group>
      );
    }
    
    function Cubee(){
      return (
          <Canvas camera={{ fov: 45,  position: [-100, 410, 120] }}>
              <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 10]}>
                <Scene />
                <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.1} maxAzimuthAngle={0.1}  maxPolarAngle={0.03} />
              </Float>
            </Canvas>
           
         
      )
    }
  function Heromob(){
  
  
  
    return (
      <div className="w-screen top-0 left-0 resize-none relative overscroll-x-contain overflow-hidden h-[514px]" >
      
        <div className="md:h-screen  h-full opacity-95 z-10 w-screen absolute  hero" />
       
        <div className="heroblack2 absolute z-20 w-full h-full" />
        <div className="heroblack3 absolute z-10 w-full h-full" />
  
        <div className="w-screen flex flex-row flex-wrap h-screen md:h-screen absolute">
  
        <div className="z-[40] relative md:left-[28%] overflow-hidden top-[28px] mx-auto text-center h-[245px] select-none">
         <Cubee/>
           
          </div>
  
          <div className="text-center absolute z-[50] w-full sm:w-1/4 top-[318px]">
            <h3 className=" mx-auto not-italic  font-black select-none herooh ">Create immutable records of your ideas</h3>
  
            <p className="mt-3 mx-auto heroop shrink-0 text-white text-lg not-italic font-light leading-[normal] tracking-[-0.18px] select-none ">Protected by blockchain-backed records</p>
  
              <a className="herobu select-none relative top-[20px] px-9 py-3 shadow-sm hover:shadow-md hover:bg-zinc-950 hover:shadow-slate-50 shadow-white " href="/post"> Start Posting {' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
  </span></a>
          </div>
  
          
         
        </div>
        
        <div className="rounded-full  overflow-hidden absolute animate-hero-light-1 top-[2%] left-[20%] z-[30] w-[250px] h-[250px] bghero blur-2xl" />
        {/* <div className="bghero z-90 animate-hero-light-1" /> */}
  
        
      </div>
    );
  
  }