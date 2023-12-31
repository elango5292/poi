"use client";

import { useEffect, useState } from "react";
import { Buttonn } from "@/components/ui/buttonhero";
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Float } from '@react-three/drei';
import debounce from 'lodash/debounce';
import { motion } from 'framer-motion';
import Link from 'next/link'
import Navbar from "components/nav"


function Scene() {
  const myMesh = useRef();
  const gltf = useLoader(FBXLoader, '/fb.fbx');

  return (
    <group>
      <primitive object={gltf} ref={myMesh} rotation={[0.5, 0.45, -2]} scale={[0.9, 0.9, 0.9]}/>
    </group>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const [mousemoving, setMousemoving] = useState(false);
  const containerRef = useRef(null);


  function handleMouseMove(e) {
    const containerRect = containerRef.current.getBoundingClientRect();
  
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    setMousemoving(true);
    if (
      mouseX >= 0 &&
      mouseX <= containerRect.width &&
      mouseY >= 0 &&
      mouseY <= containerRect.height
    ) {
      setMousePosition([mouseX, mouseY]);
    } else {
      setMousemoving(false);
    }
  
    handleMouseMoved();
  }


    const handleMouseMoved = debounce(() => {
        setMousemoving(false)
    }, 100);
  


  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen resize-none relative overscroll-x-contain overflow-hidden h-screen"  ref={containerRef}>
    <Navbar className="absolute flex top-0 z-[50]" />
    
      <div className="md:h-screen  h-full opacity-95 z-10 w-screen absolute hero" />
     
      <div className="heroblack2 absolute z-20 w-full h-full" />
      <div className="heroblack3 absolute z-10 w-full h-full" />
      <motion.div
        className={`absolute overflow-hidden w-12 h-12 rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-gray-800 blur-sm`}
        style={{
            left:mousePosition[0] - 20,
            top: mousePosition[1] - 20,
            overflow: 'hidden'
          }}

          initial={mousemoving ? { scale: 2} : { scale: 1 }}
          animate={mousemoving ? { scale: 2 } : { scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      <div className="w-screen flex flex-row flex-wrap h-full md:h-screen absolute">
        <div className="md:left-[15%] text-center md:text-left mx-3 relative z-[40] w-full sm:w-1/4 absolute top-[12%] md:top-[25%]">
          <h3 className="herotitle text-white mx-9 md:mx-auto text-5xl md:text-6xl not-italic font-black  md:font-semibold leading-[100%] md:tracking-[-3.2px] select-none">Welcome to proof of innovations</h3>

          <p className="md:my-5 my-7 text-lg mx-9 md:mx-auto shrink-0 text-white text-lg not-italic font-light leading-[normal] tracking-[-0.18px] select-none">Create an immutable record of your ideas</p>
          <Buttonn variant="outline" className="select-none text-md px-14 py-6 shadow-sm hover:shadow-md hover:bg-zinc-950 hover:shadow-slate-50 shadow-white md:top-[5%]">
            Start Posting {' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
</span>
          </Buttonn>
        </div>

        <div className="z-[40] md:left-[30%] overflow-hidden md:top-[2%] top-[14%] mx-auto text-center md:absolute w-3/4 h-1/2   md:min-w-[75%] md:h-full select-none">
          <Canvas camera={{ fov: 45, position: [-100, 450, 120] }}>
            <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 10]}>
              <Scene />
            </Float>
          </Canvas>
         
        </div>
       
      </div>
      <div className="rounded-full  overflow-hidden absolute animate-hero-light-1 top-[55%] left-[15%] md:left-[58%] z-[30] md:top-[50%] w-[25%] h-[25%] bg-white blur-2xl" />
      <div className="rounded-full absolute  overflow-hidden animate-hero-light-2 top-[45%] left-[26%] md:left-[58%] z-[30] md:top-[50%] w-[30%] h-[30%] bg-white blur-3xl" />

     
    </div>
  );
}