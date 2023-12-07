"use client"
import { FaArrowRight } from "react-icons/fa";
import fetchChainData from '@/lib/price';
import network from "@/lib/networks"
import { useEffect,useState,useRef } from "react";
import {
  useSendTransaction,
  useWaitForTransaction,
  useChainId,
} from 'wagmi';
import { utils } from 'ethers';





export default function Ppublish ({data,hsh,completion,setCompletion,amount}) {
 
 
  const { tdata, sendTransaction } = useSendTransaction({
    to: "0x95A92717b4Ed7265D83F0979f2B64106fE5545A0", // Publisher address
    value: utils.parseEther(amount.toString()), 
    data: data,
    nonce:12,
    onSuccess(tdata) {
      console.log('Success', tdata.hash)
      hsh(tdata.hash)
      setCompletion(true)
    },
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: tdata?.hash,
    
    
  });



// setCompletion(true)




    



return (
<div className='flex cursor-pointer' onClick={(e) => {
  if (!completion){
    sendTransaction?.();
  }
  
}}>
  <button className="text-[#DADADA]">
    
{isLoading
? 'Publishing'
: isSuccess
? 'Published'
: 'Publish'}
</button>
  <FaArrowRight className="text-[#DADADA]"/>
</div>
);
};
