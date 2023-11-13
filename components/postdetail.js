"use client"
import React from 'react';

import { Tooltip } from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState} from 'react';

export default function postdetail(){
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied1, setIsCopied1] = useState(false);
  
    const handleCopy = () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };
  
    const handleCopy1 = () => {
      setIsCopied1(true);
      setTimeout(() => {
        setIsCopied1(false);
      }, 1000);
    };
  
    const pubhashdetail = "0xb30357ffd7f46d0993535108725bec8b51e9efa7b9fedc001bd53c8adfd60579"
    const posthashdetail = "0xa30357ffd7f46d0993535108725bec8b51e9efa7b9fedc001bd53c8adfd60579"
    const authordetail = "Anger asdet"
    const datedetail = "Sun, 29 Oct 2023 05:27:36 GMT"
  
    return (
  
      
          <div className=" detailcontainer mt-12 mx-auto w-[342px] md:w-[773px] h-[551px] md:h-[368px]">
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
                      {pubhashdetail}
                    </p>
                    <div>
                      <CopyToClipboard text={pubhashdetail} onCopy={handleCopy}>
  
                        <div className="relative">
                          {isCopied  ? (
                            <img src="/copied.svg" className="inline md:w-[12px]  w-[15px] md:ml-0 ml-9 h-auto" />
                          ) : (
                            <img src="/copy.svg" className="inline hover:invert md:p-[5px]  md:w-[23px] w-[15px] md:ml-0 ml-9 h-auto" />
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
                      {posthashdetail}
                    </p>
                    <div>
                      <CopyToClipboard text={posthashdetail} onCopy={handleCopy1}>
  
                        <div className="relative">
                          {isCopied1 ? (
                            <img src="/copied.svg" className="inline md:w-[12px] w-[15px] md:ml-0 ml-9 h-auto" />
                          ) : (
                            <img src="/copy.svg" className="inline hover:invert md:p-[5px]  md:w-[23px] w-[15px] md:ml-0 ml-9 h-auto" />
                          )}
                        </div></CopyToClipboard>
  
                    </div>
  
                  </div>
  
                </div></div>
  
  
              <div className='flex flex-row items-center  pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[129px] h-[17px]">
                    Author :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block w-[474.9px] text-[#DADADA]">
                  {authordetail}
                </p>
              </div>
  
              <div className='flex flex-row items-center  pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[129px] h-[17px]">
                    Publish date :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block w-[474.9px] text-[#DADADA]">
                  {datedetail}
                </p>
              </div>

              <div className='flex flex-row items-center pl-[19px] md:pl-[25px]  mt-[30px]' >
                <div>
                  <p className=" text-[#DADADA] text-[12px] md:text-[14px] inline-block w-[129px] h-[17px]">
                  Post date :
                  </p>
                </div>
  
                <p className="my-auto text-[12px] md:text-[14px] inline-block w-[474.9px] text-[#DADADA]">
                {datedetail}
                </p>
              </div>
  
            </div>
  
  
          </div>
    )
  
  
  
      
}