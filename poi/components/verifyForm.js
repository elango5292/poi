// pages/index.js
"use client"
import React from 'react';
import { useState,useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDebounce } from 'use-debounce';
import { IoCheckmarkDoneCircle,IoCloseCircle } from "react-icons/io5";
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



  

  return (<div className="px-3.5 py-2 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 mb-4">

  <div className="px-5 my-5">
    <label htmlFor="identityPassword" className="my-5">Identity Password:</label>
    <div className="py-2 md:px-2" >
    <input
      type="password"
      id="identityPassword"

      className="w-full sm:w-auto rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
      value={aPassword}
      onChange={handleInputChange}

    />
    </div>
  </div>

  <div className="px-5 mt-9">
    <div id="enteryourdetails" className="pb-5">
      <b>Enter your details</b>
    </div>

    <div>
      <label htmlFor="name" className="my-3">Name:</label>
        {(props.anon ==="1x")? <div className="flex items-center"> <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white/90 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
          
          value={props.username}
          disabled= {true}
        onChange={handleInputChange}

        /> <IoCheckmarkDoneCircle className="inline m-1 h-6 w-6"/> </div>
        :
        <div className="flex items-center">
        <input
          type="text"
          id="name"
          className="my-2 flex w-full md:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
          
          value={aName}
        onChange={handleInputChange}

        />  {aName!=""&&(namel ?
            <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
            (namesha ===props.username)?
            <IoCheckmarkDoneCircle className="inline m-1 h-6 w-6"/>:
    <IoCloseCircle className="inline m-1 h-6 w-6"/>
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
          className="my-2 flex w-full sm:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
          value={aDate}
        onChange={handleInputChange}
        />
       { aDate != ""&&( datel ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (datesha ===props.userdob)?
        <IoCheckmarkDoneCircle className="inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline m-1 h-6 w-6"/>)
}
      </div>
    </div>

    <div>
      <label htmlFor="idNumber" className="my-3">ID:</label>
      <div className="flex items-center">
        <input
          type="text"
          id="idNumber"
          className="my-2 flex w-full sm:w-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
          value={aId}
        onChange={handleInputChange}
        />
             {aId!=""&&(idl ?
        <CgSpinner className="inline m-1 animate-spin h-6 w-6" />:
        (idsha ===props.userid)?
        <IoCheckmarkDoneCircle className="inline m-1 h-6 w-6"/>:
<IoCloseCircle className="inline m-1 h-6 w-6"/>)
}
      </div>
    </div>
  </div>
</div>


  );
};


export default validation;
