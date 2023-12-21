"use client"

import dynamic from 'next/dynamic'
import Heroj from "./../components/heroj"



const Herozag = dynamic(() =>
    import("./../components/herozag"), {
    loading: () => <div className="flex items-center w-full mx-auto justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)

const Herovid = dynamic(() =>
    import("./../components/herovid"), {
    loading: () => <div className="flex items-center w-full mx-auto justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)

import Herofaq from "./../components/herofaq"
import Hero3 from "./../components/hero3"
import Footer from "./../components/footer"

import React, { useState,useEffect } from 'react';



export default function Home() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      

      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

    return (
      <div className=" mt-9 overflow-x-hidden">
        {/* <Heroj/> */}
        <Hero3 w={width}/>

        {/* <Herozag/> */}
        
        {/* <Herovid /> */}
        {/* <Herofaq/>  */}
        {/* <Footer/> */}
      
      </div>
    );
  }
  