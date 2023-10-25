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
{w>768?<Heropc/> :
                 <>
<Heromob/>

        </> }

        
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
    
      <div className="md:h-screen  h-full opacity-95 z-10 w-screen absolute hero" />
     
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

function Heropc(){
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
    <div className="w-screen top-0 left-0 resize-none relative overscroll-x-contain overflow-hidden h-screen"  ref={containerRef}>
    
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

      <div className="w-screen flex flex-row flex-wrap h-screen md:h-screen absolute">
        <div className="md:left-[20%] text-center md:text-left md:mx-3 relative z-[50] w-full sm:w-1/4 top-[12%] md:top-[23%]">
          <h3 className="bg-clip-text bg-gradient-to-b from-white to-[#999999] text-transparent mx-4 md:mx-auto text-5xl md:text-6xl not-italic font-black  md:font-semibold md:tracking-[-3.2px] select-none">Create immutable <span className="bg-clip-text bg-gradient-to-tl from-white to-gray-500 "> records </span>of your ideas</h3>

          <p className="md:my-5 my-7 land3te  mx-9 md:mx-auto shrink-0 text-white text-lg not-italic font-light leading-[normal] tracking-[-0.18px] select-none">Protected by blockchain-backed records</p>

            <a className=" select-none bg-clip-text bg-gradient-to-bl from-white to-gray-400 text-transparent text-md px-14 py-3 mt-4 shadow-sm hover:shadow-md hover:bg-zinc-950 hover:shadow-slate-50 shadow-white md:top-[5%]" href="/post"> Start Posting {' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
</span></a>
        </div>

        <div className="z-[40] md:left-[28%] overflow-hidden md:-top-[5%] top-[24%] mx-auto text-center md:absolute w-3/4 h-1/2 mt-4   md:min-w-[75%] md:h-full select-none">
        <Cubee/>
         
        </div>
       
      </div>
      
      <div className="rounded-full  overflow-hidden absolute animate-hero-light-1 top-[55%] left-[15%] md:left-[58%] z-[30] md:top-[50%] w-[25%] h-[25%] bg-white blur-2xl" />
      <div className="rounded-full absolute  overflow-hidden animate-hero-light-2 top-[45%] left-[26%] md:left-[58%] z-[30] md:top-[50%] w-[30%] h-[30%] bg-white blur-3xl" />

      
    </div>
  );
}