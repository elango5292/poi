"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useEffect } from 'react';

import { useNetwork } from 'wagmi'

export default function Trans ({ setchain }){
  const { chain } = useNetwork()


  useEffect(() => {
    try {
      setchain(chain.id+"")

    } catch (error) {
      console.log(error)
    }
   
}, [chain]);

 

  return (
    <div>
      <ConnectButton />
    </div>
  );
};