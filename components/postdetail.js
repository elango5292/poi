"use client"
import React from 'react';

import { Tooltip } from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState} from 'react';
import networks from "../lib/networks"

export default function postdetail({...props}){

    const [isCopied2, setIsCopied2] = useState(0);
  
   

    const handleCopy2 = (a) => {
      setIsCopied2(a);
      setTimeout(() => {
        setIsCopied2(0);
      }, 1000);
    };
  
 
    return (
  
      
          <div className=" detailcontainer mt-12 mx-auto w-[342px] md:w-[773px] h-[591px] md:h-[378px]">
            <div className='flex flex-col md:ml-[39px] ml-[22px] mt-[28px] md:mt-[30px]'>
              <b className="inline-block text-[#E4E4E4] w-[129px] h-[17px]">
  
                Post Details
              </b>
  
              <div className='flex flex-col md:flex-row md:items-center md:mt-[30px] mt-[41px]'>
                <div className=''>
                  <img src="/tooltip.svg" className='inline mr-[9px] w-[1em] h-auto' data-tooltip-id="publish-tooltip"
                    data-tooltip-content="Publish hash"
                    data-tooltip-place="top" ></img><Tooltip className='publishtooltipstyle'  id="publish-tooltip" /><p className=" text-[#DADADA] inline-block w-[129px] h-[17px]">
                    Publish Hash :
                  </p>
                </div>
                <div className="pl-[14px] mt-[20px] md:mt-[0px] flex flex-row rounded-[9px] bg-[#070707] box-border w-[299px] md:w-[520px] h-[80px] md:h-[35px] border-[1px] border-[#585858] border-solid border-d">
  
                  <div className="flex items-center cursor-pointer">
                    <p className="text-[12px] md:text-xs md:mt-1 mt-[10px] md:w-[474.9px] w-[203px] break-words h-auto text-[#DADADA]">
                      {props.pubhashdetail}
                    </p>
                    <div>
                      <CopyToClipboard text={props.pubhashdetail} onCopy={()=>handleCopy2(1)}>
  
                        <div className="relative  select-none">
                          {(isCopied2===1)  ? (
                            <img src="/copied.svg" className="inline md:w-[12px] cursor-pointer  w-[15px] md:ml-0 ml-9 h-auto" />
                          ) : (
                            <img src="/copy.svg" className="inline hover:invert cursor-pointer md:p-[5px]  md:w-[23px] w-[15px] md:ml-0 ml-9 h-auto" />
                          )}
                        </div></CopyToClipboard>
  
                    </div>
  
                  </div>
  
                </div></div>
  
  
  
  
                <div className='flex flex-col md:flex-row md:items-center md:mt-[30px] mt-[41px]'>
                <div className=''>
                  <img src="/tooltip.svg" className='inline mr-[9px] w-[1em] h-auto' data-tooltip-id="publish-tooltip"
                    data-tooltip-content="Hello world!"
                    data-tooltip-place="top"></img><Tooltip id="publish-tooltip" /><p className=" text-[#DADADA] inline-block w-[129px] h-[17px]">
                    post Hash :
                  </p>
                </div>
                <div className="pl-[14px] mt-[20px] md:mt-[0px] flex flex-row rounded-[9px] bg-[#070707] box-border w-[299px] md:w-[520px] h-[80px] md:h-[35px] border-[1px] border-[#585858] border-solid border-d">
  
                  <div className="flex items-center cursor-pointer">
                    <p className="text-[12px] md:text-xs md:mt-1 mt-[10px] md:w-[474.9px] w-[203px] break-words h-auto text-[#DADADA]">
                      {props.posthashdetail}
                    </p>
                    <div>
                      <CopyToClipboard text={props.posthashdetail} onCopy={()=>handleCopy2(2)}>
  
                        <div className="relative  select-none">
                          {(isCopied2===2) ? (
                            <img src="/copied.svg" className="inline cursor-pointer md:w-[12px] w-[15px] md:ml-0 ml-9 h-auto" />
                          ) : (
                            <img src="/copy.svg" className="inline cursor-pointer hover:invert md:p-[5px]  md:w-[23px] w-[15px] md:ml-0 ml-9 h-auto" />
                          )}
                        </div></CopyToClipboard>
  
                    </div>
  
                  </div>
  
                </div></div>

                
  
  
  
                <div className='flex flex-row items-center  pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[100px] md:w-[129px] h-[17px]">
                    Posted by :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block md:w-fit md:mr-1 w-[136px] break-words text-[#DADADA]">
                  {props.addressdetail}
                </p>
                <div>
                      <CopyToClipboard text={props.addressdetail} onCopy={()=>handleCopy2(3)}>
  
                        <div className="relative cursor-pointer select-none">
                          {(isCopied2===3) ? (
                            <img src="/copied.svg" className="inline cursor-pointer md:w-[12px] w-[15px] md:ml-0 ml-[15px] h-auto" />
                          ) : (
                            <img src="/copy.svg" className="inline  hover:invert md:p-[5px]  md:w-[23px] w-[15px] md:ml-0 ml-[15px] h-auto" />
                          )}
                        </div></CopyToClipboard>
  
                    </div>
  
              </div>
  
              <div className='flex flex-row items-center  pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[100px] md:w-[129px] h-[17px]">
                    Chain :
                  </p>
                </div>
  
  <div className='flex flex-row items-center'>
  <img src={`/cryptologo/${networks(props.chain, "logo")}`} alt="Chain Logo" className=" h-[17px] mr-2 w-auto grayscale" />
    <p className="my-auto text-[12px] md:text-[14px] inline-block max-w-[100px] md:max-w-fit text-[#DADADA]">
                  {networks(props.chain, "name")}
                </p></div>
                
              </div>

              <div className='flex flex-row items-center  pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[100px] md:w-[129px] h-[17px]">
                    Author :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block w-[474.9px] text-[#DADADA]">
                  {props.authordetail}
                </p>
              </div>
  
             

              <div className='flex flex-row items-center pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[100px] md:w-[129px] h-[17px]">
                  Posted on :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block w-[200px] md:w-full text-[#DADADA]">
                {props.datedetail}
                </p>
              </div>
  
            </div>
  
  
          </div>
    )
  
  
  
      
}