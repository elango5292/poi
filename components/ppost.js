"use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import * as React from 'react';
import {
  useSendTransaction,
  useWaitForTransaction,
  useAccount,
} from 'wagmi';
import { utils } from 'ethers';




export default function Ppost ({data,hsh,completion,setCompletion,work}) {
  const { address, connector, isConnected } = useAccount()



    
      const { tdata, sendTransaction } = useSendTransaction({
        to: address, // Your recipient address here
        value: utils.parseEther('0.01'), // Amount in Ether (0.01 Ether in this example)
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
      if (!isConnected){
        alert("Connect a Wallet and conntinue")

      }else{

        if (!completion && work){
        sendTransaction?.();
      }}
      
    }}>
      <button>

  {isLoading
    ? 'Posting'
    : isSuccess
    ? 'Posted'
    : 'Post'}
</button>
      <FaArrowRight />
    </div>
  );
};
