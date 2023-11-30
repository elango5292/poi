// pages/index.js
"use client"
import {FaLock,FaCheckCircle  } from "react-icons/fa";
import React from 'react';
import { useState, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoCheckmarkDoneCircle, IoCloseCircle } from "react-icons/io5";
const sha256 = require("sha256");

export default function validation({pwords,handleop , op}){

    const [aPassword, setApassword] = useState('');
    const [aName, setAname] = useState("");
    const [namesha, setnamesha] = useState('')
    const [namel, setNamel] = useState(false);
    const [aDate, setAdate] = useState("");
    const [datesha, setdatesha] = useState('')
    const [datel, setDatel] = useState(false);

    const [aId, setAid] = useState("");

    const [idsha, setidsha] = useState('')

    const [idl, setIdl] = useState(false);
    const [vlevel, setvlevel] = useState(0);
    const handleInputChange = (event) => {
        const { id, value } = event.target;

        switch (id) {
            case "name":
                setAname((prev)=>value);
                setNamel(true);
                break;
            case "dob":
                setAdate((prev)=>value);
                setDatel(true);
                break;
            case "identityPassword":
                setApassword((prev)=>value);

                break;
            case "idNumber":
                setAid((prev)=>value);
                setIdl(true);

                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setnamesha( (prev)=>sha256(aName + aPassword));
        setdatesha((prev)=>sha256(aDate + aPassword));
        setidsha((prev)=>sha256(aId + aPassword));
          

    }, [aPassword]);

    useEffect(() => {
        setnamesha((prev)=>sha256(aName + aPassword));
        levelupdater()
        setNamel(false);
    }, [aName]);



    useEffect(() => {
        setdatesha((prev)=>sha256(aDate + aPassword));
        levelupdater()
        setDatel(false);
    }, [aDate]);

    useEffect(() => {
        setidsha((prev)=>sha256(aId + aPassword));
        levelupdater()
        setIdl(false)
    }, [aId]);

    useEffect(() => {
        levelupdater();
    }, [namesha, datesha, idsha,aPassword]);

    function levelupdater(){
        var newVlevel = 0;
        
        if (datesha === pwords.words[2]) {
            newVlevel += 1;
        }
        if (idsha === pwords.words[3]) {
            newVlevel += 1;
        }
        if (pwords.words[0] === "1x"){
            newVlevel += 1;
        } else{
            if (namesha === pwords.words[1]) {
                newVlevel += 1;
            }
        }
        setvlevel(newVlevel);
        console.log(vlevel);
    }
  
  



    return (<div className=" detailcontainer w-[320px] mx-auto  h-[540px] md:w-[675px] md:h-[397px] rounded-md mb-4">


        <div className="ml-5 mt-9">
            <div id="enteryourdetails" className="mb-[25px]">
                <h3 className="font-medium text-md text-[#D9D9D9]">Enter your details</h3>
            </div>

        </div>
        <div className='grid grid-cols-1 gap-3  px-5 md:grid-cols-2 md:grid-rows-2'>
            <div className='order-1 md:order-2 '>
                <div >
                    <label htmlFor="identityPassword" className="font-extralight text-[#D9D9D9]  text-sm md:font-light">Identity Password:</label>
                    <div className="py-2 " >
                        <input
                            type="password"
                            id="identityPassword"

                            className="w-full md:w-[217px] px-3.5 py-2 rounded-md border-0 bg-white/5  text-white shadow-sm ring-1 ring-inset ring-white/10    sm:text-sm sm:leading-6 mb-4"
                            value={aPassword}
                            onChange={handleInputChange}

                        />
                    </div>
                </div>
            </div>
            <div className='order-2 md:order-1  md:row-span-2 '>
                <div>
                    <label htmlFor="name" className="my-3 font-extralight text-[#D9D9D9] text-sm md:font-light">Name:</label>
                    {(pwords.words[0] === "1x") ? <div className="flex items-center"> <input
                        type="text"
                        id="name"
                        className="my-2 flex w-full md:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white/90 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"

                        value={pwords.words[1]}
                        disabled={true}
                        onChange={handleInputChange}

                    /> <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6" /> </div>
                        :
                        <div className="flex items-center">
                            <input
                                type="text"
                                id="name"
                                className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"

                                value={aName}
                                onChange={handleInputChange}

                            />  {aName != "" && (namel ?
                                <CgSpinner className="inline m-1 animate-spin h-6 w-6" /> :
                                (namesha === pwords.words[1]) ?
                                    <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6" /> :
                                    <IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6" />
                            )}
                        </div>
                    }
                </div>


                <div>
                    <label htmlFor="dob" className="my-3 font-extralight text-[#D9D9D9] text-sm md:font-light">DOB:</label>
                    <div className="flex items-center">
                        <input
                            type="date"
                            id="dob"
                            className="my-2 flex w-full placeholder:text-[#D9D9D9] md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#D9D9D9] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
                            value={aDate}
                            onChange={handleInputChange}
                        />
                        {aDate != "" && (datel ?
                            <CgSpinner className="inline m-1 animate-spin h-6 w-6" /> :
                            (datesha === pwords.words[2]) ?
                                <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6" /> :
                                <IoCloseCircle className="inline text-[#D9D9D9]  m-1 h-6 w-6" />)
                        }
                    </div>
                </div>

                <div>
                    <label htmlFor="idNumber" className="my-3 font-extralight text-[#D9D9D9] md:font-light">ID:</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            id="idNumber"
                            className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
                            value={aId}
                            onChange={handleInputChange}
                        />
                        {aId != "" && (idl ?
                            <CgSpinner className="inline m-1 animate-spin h-6 w-6" /> :
                            (idsha === pwords.words[3]) ?
                                <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6" /> :
                                <IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6" />)
                        }
                    </div>
                </div>
            </div>
            <div className='order-3 md:order-3 '>
                <div>
                    {vlevel<3?<button disabled={vlevel<3} className="text-[12px] md:mt-[0px] mt-4  flex justify-center items-center  md:text-[14px] rounded-md   bg-gradient-to-b from-[#7E7E7E] to-[#fafafa] text-black w-[263px] md:w-[217px] h-[40px] md:h-[41px]  hover:cursor-pointer" href="#enteryourdetails" onClick={()=>handleop()}>
                     <FaLock className="inline mx-1"/>  Confirm Authorship

                    </button> :
                    <button className="text-[12px] md:mt-[0px] mt-4  flex justify-center items-center  md:text-[14px] rounded-md   bg-gradient-to-t from-[#DADADA] to-[#fafafa] text-black w-[263px] md:w-[217px] h-[40px] md:h-[41px]  hover:cursor-pointer" href="#enteryourdetails" onClick={()=>handleop()}>
                    {!op ? <><FaCheckCircle  className="inline mx-1"/> Confirm Authorship</> : <IconRefresh className='animate-spin  mx-auto h-4 w-4'/> } 

                 </button>}
                    
                </div>
            </div>
        </div>



    </div>
    );
};




function IconRefresh (props) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
        <path d='M21 3v5h-5' />
        <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
        <path d='M8 16H3v5' />
      </svg>
    )
  }
  