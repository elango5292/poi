"use client"
import { FaArrowRight } from "react-icons/fa";
import {
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi';
import { utils } from 'ethers';





export default function Ppublish ({data,hsh,completion,setCompletion,amount}) {
 
 
  const { tdata, sendTransaction } = useSendTransaction({
    to: "0x6E2bBDE1ece254332Cb5e7431a343fdB716c4F01", // Publisher address
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
