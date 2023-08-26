"use client"
import { FaArrowRight } from "react-icons/fa";

import * as React from 'react';
import {
  useSendTransaction,
  useWaitForTransaction,
  useAccount,
} from 'wagmi';
import { utils } from 'ethers';




export default function Ppublish ({data,hsh,completion,setCompletion}) {
  const { address, connector, isConnected } = useAccount()

  
  const { tdata, sendTransaction } = useSendTransaction({
    to: "0x95A92717b4Ed7265D83F0979f2B64106fE5545A0", // Publisher address
    value: utils.parseEther('0.01'), 
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
  <button>
    
{isLoading
? 'Publishing'
: isSuccess
? 'Published'
: 'Publish'}
</button>
  <FaArrowRight />
</div>
);
};
