// pages/index.js
"use client"
import React from 'react';
import { useState,useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDebounce } from 'use-debounce';
import { IoCheckmarkDoneCircle,IoCloseCircle } from "react-icons/io5";
import { Input } from "@/components/ui/input"
const sha256 = require("sha256");


const validation = (props) => {

    const [aPassword,setApassword]=useState('');
    const [aName, setAname] = useState("");
    const [namesha,setnamesha]=useState('')
  const [namel,setNamel]=useState(false);
  const [aDate, setAdate] = useState("");
  const [datesha,setdatesha]=useState('')
  const [datel,setDatel]=useState(false);

  const [aId, setAid] = useState("");

  const [idsha,setidsha]=useState('')

  const [idl,setIdl]=useState(false);
  const [vlevel,setvlevel]=useState(0);



 const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "name":
        setAname( value);
        setNamel(true);
        break;
      case "dob":
        setAdate(value);
        setDatel(true);
        break;
        case "identityPassword":
        setApassword(value);

        break;
      case "idNumber":
        setAid(value);
        setIdl(true);
        
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setnamesha(sha256(aName + aPassword));
    setdatesha(sha256(aDate +aPassword));
    setidsha(sha256(aId+aPassword));

  }, [aPassword]);

  useEffect(() => {
    setnamesha(sha256(aName + aPassword));
    setNamel(false);
  }, [aName]);



  useEffect(() => {
    setdatesha(sha256(aDate +aPassword));
    setDatel(false);
  }, [aDate]);

  useEffect(() => {
    setidsha(sha256(aId+aPassword));
    setIdl(false)
  }, [aId]);

  useEffect(() => {
    setvlevel(0)
    if(namesha ===props.username){
        setvlevel(vlevel+1)
    }
    if(datesha ===props.userdob){
        setvlevel(vlevel+1)
    }
    if(idsha ===props.userid){
        setvlevel(vlevel+1)
    }
  }, [aId,aDate,aName,aPassword]);



  

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
        {(props.anon ==="1x")? <div className="flex items-center"> <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white/90 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          
          value={props.username}
          disabled= {true}
        onChange={handleInputChange}

        /> <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/> </div>
        :
        <div className="flex items-center">
        <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          
          value={aName}
        onChange={handleInputChange}

        />  {aName!=""&&(namel ?
            <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
            (namesha ===props.username)?
            <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
    <IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6"/>
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
       { aDate != ""&&( datel ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (datesha ===props.userdob)?
        <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline text-[#D9D9D9]  m-1 h-6 w-6"/>)
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
             {aId!=""&&(idl ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (idsha ===props.userid)?
        <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6"/>)
}
      </div>
    </div>  
  </div>
  <div className='order-3 md:order-3 '>
  <div>
<button className="text-[12px] md:mt-[0px] mt-4  flex justify-center items-center  md:text-[14px] rounded-md   bg-[#D9D9D9] text-black w-[263px] md:w-[217px] h-[40px] md:h-[41px]  hover:cursor-pointer" href="#enteryourdetails">
                        Verify Authorship

                    </button>
</div>
  </div>
</div>



</div>
  );
};


export default validation;


{/* <div className="flex flex-col md:flex-row">
  
  <div className="flex flex-col">
<div>
      <label htmlFor="name" className="my-3">Name:</label>
        {(props.anon ==="1x")? <div className="flex items-center"> <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white/90 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          
          value={props.username}
          disabled= {true}
        onChange={handleInputChange}

        /> <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/> </div>
        :
        <div className="flex items-center">
        <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          
          value={aName}
        onChange={handleInputChange}

        />  {aName!=""&&(namel ?
            <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
            (namesha ===props.username)?
            <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
    <IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6"/>
        )}
          </div>
       }
         </div>
       

    <div>
      <label htmlFor="dob" className="my-3">DOB:</label>
      <div className="flex items-center">
        <input
          type="date"
          id="dob"
          className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          value={aDate}
        onChange={handleInputChange}
        />
       { aDate != ""&&( datel ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (datesha ===props.userdob)?
        <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6"/>)
}
      </div>
    </div>

    <div>
      <label htmlFor="idNumber" className="my-3">ID:</label>
      <div className="flex items-center">
        <input
          type="text"
          id="idNumber"
          className="my-2 flex w-full md:w-[217px] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 mb-4"
          value={aId}
        onChange={handleInputChange}
        />
             {aId!=""&&(idl ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (idsha ===props.userid)?
        <IoCheckmarkDoneCircle className=" text-[#D9D9D9] inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline text-[#D9D9D9] m-1 h-6 w-6"/>)
}
      </div>
    </div>


   </div> 
<div className="md:ml-[106px] flex flex-col justify-around">



<div >
    <label htmlFor="identityPassword" className="">Identity Password:</label>
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

<div>
<button className="text-[12px]  flex justify-center items-center  md:text-[14px] rounded-md md:mx-auto  md:my-auto  bg-[#D9D9D9] text-black w-[263px] md:w-[217px] h-[30px] md:h-[41px]  hover:cursor-pointer" href="#enteryourdetails">
                        Verify Authorship

                    </button>
</div>

  </div>
</div>
    
  </div> */}