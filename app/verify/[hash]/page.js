'use client'
import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'next/navigation';
import { MdHideSource } from 'react-icons/md';

import { CgProfile } from "react-icons/cg";

import getTime from '../../../modules/getime';


export default function verify() {
  const pathname = useParams();
  const prms = useSearchParams();
  const passw = prms.get('p');
  const chain = prms.get('chain');
  const [innovation, setInnovation] = useState([]);
  const [words, setWords] = useState("");
  const [postdate, setpostdate] = useState("");
  const [transactionData, settransactionData] = useState("");
  var rpc= ""


  const networks = {
    11155111: {
      network: "sepolia",
      rpc: "https://rpc.ankr.com/eth_sepolia"
    },
    80001: {
      name: "Polygon Mumbai",
      rpc: "https://polygon-mumbai-bor.publicnode.com"
    },
    97: {
      name: "Binance Smart Chain Testnet",
      rpc: "https://data-seed-prebsc-1-s1.binance.org:8545"
    },
    43113: {
      name: "Avalanche Fuji",
      rpc: "https://api.avax-test.network/ext/bc/C/rpc"
    },
    42161: {
      name: "Arbitrum One",
      rpc: "https://arb1.arbitrum.io/rpc"
    },
    43114: {
      name: "Avalanche",
      rpc: "https://api.avax.network/ext/bc/C/rpc"
    },
    137: {
      name: "Polygon",
      rpc: "https://polygon-rpc.com"
    },
    56: {
      name: "BNB Smart Chain",
      rpc: "https://rpc.ankr.com/bsc"
    },
    1: {
      network: "Ethereum",
      rpc: "https://cloudflare-eth.com"
    }
  };

  useEffect(() => {
  const selectedNetwork = networks[chain];
 
 
 
  if (selectedNetwork ) {
    rpc = selectedNetwork.rpc;
      console.log(rpc)}
handleCollect()
  
    
  }, [chain]);


  async function getTransactionData(HsH) {
    var rpcEndpoint = rpc;
    const requestObject = {
      jsonrpc: "2.0",
      method: "eth_getTransactionByHash",
      params: [HsH],
      id: chain,
    };

    try {
      const response = await fetch(rpcEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObject),
      });

      const responseData = await response.json();

      if (responseData && responseData.result) {
        return responseData;
      } else {
        console.log("null");
      }
    } catch (error) {
      console.log("RPC request error:", error);
    }
  }

  async function handleCollect() {
    const reciept = await getTransactionData(pathname.hash);
    console.log(transactionData);

    const cleanedHexString = reciept.result.input.slice(2);
    setpostdate(getTime(reciept.result.blockNumber,chain))
    console.log("cleanedHexString", cleanedHexString);

    let decData = CryptoJS.enc.Hex.parse(cleanedHexString).toString(CryptoJS.enc.Utf8)
    let bytes = CryptoJS.AES.decrypt(decData, passw).toString(CryptoJS.enc.Utf8)
    
    const dec = CryptoJS.enc.Hex.parse(bytes).toString(CryptoJS.enc.Utf8)




console.log("bytes",dec);

    const wordsli = dec.split("<>");
    setWords(wordsli);
    console.log(wordsli);
  }

  // useEffect(() => {
  //   // Make sure passw is not empty before calling handleCollect
  //   if (passw) {
  //     handleCollect();
  //   }
  // }, [passw]); // Add passw as a dependency to useEffect

  return (
    <div className="max-w-3xl mx-auto p-4">
    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
    {words[4]}
    </h1>

    <div className="text-white">
      <p rel="author" className="text-xl font-bold">
        {(words[0]==="1x")?  <p>
                                            <CgProfile className="mx-2 inline" />{words[1]}
                                         </p>: <p><MdHideSource className="inline mx-2"/> "Annonymous"</p>}
      </p>


      <p className="text-base mx-2 font-light text-gray-400">
        {postdate}
      </p>
    </div>

    <div className="mt-8 text-white">
  <p style={{ whiteSpace: 'pre-line' }}>
    {words[6]}
  </p>
</div>

  </div>
    
  );
}
