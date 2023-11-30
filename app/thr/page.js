"use client"

import Confirmed from "@/components/confirmed"

export default function yt(){
    return(
        <AlertDialogDemo/> 
    )
}

import React, { useState } from 'react';
import {Button} from "@/components/ui/button"

function AlertDialogDemo() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClose = (e) => {
        if (e.target.className.includes('backdrop')) {
            setShowPopup(false);
        }
    }

    const handleNothing = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="mt-20 mb-24 w-full ">
        <div>
            <div>
                <button onClick={()=> setShowPopup(true)}>Open</button>
            </div>
        {showPopup && (
            <div className="fixed inset-0 flex items-center md:items-end justify-center w-screen h-screen backdrop-blur-sm bg-black  bg-opacity-60 " onClick={handleClose}>
                <div className="md:w-[45%] animate-fade-in-up md:h-auto w-[85%]  m-5  pt-5 pb-4 md:py-9 text-center backdrop-blur-lg rounded-md mb-4 bg-black bg-opacity-40 md:bg-opacity-30 text-[#DADADA] border-[1px] md:border-[0px] border-[#585858] border-solid border-d shadow-sm ring-1 ring-inset ring-white/10" onClick={handleNothing}>
                    <Confirmed/>

                    <Button onClick={()=>setShowPopup(false)} className="px-5 py-2 mt-6 mb-3 bg-[#e1e1e1] text-black ring-1 ring-inset ring-black/10">Done</Button>
                </div>
            </div>)}</div></div>
        
    );
}

