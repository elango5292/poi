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
  console.log(passw);
  const [innovation, setInnovation] = useState([]);
  const [words, setWords] = useState("");
  const [postdate, setpostdate] = useState("");
  const [transactionData, settransactionData] = useState("");

  async function getTransactionData(HsH) {
    const transactionHash = pathname.hash;
    const rpcEndpoint = "https://rpc2.sepolia.org/";

   

    const requestObject = {
      jsonrpc: "2.0",
      method: "eth_getTransactionByHash",
      params: [HsH],
      id: 1,
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
    setpostdate(getTime(reciept.result.blockNumber))
    console.log("cleanedHexString", cleanedHexString);

    let decData = CryptoJS.enc.Hex.parse(cleanedHexString).toString(CryptoJS.enc.Utf8)
    let bytes = CryptoJS.AES.decrypt(decData, passw).toString(CryptoJS.enc.Utf8)
    
    const dec = CryptoJS.enc.Hex.parse(bytes).toString(CryptoJS.enc.Utf8)




console.log("bytes",dec);

    const wordsli = dec.split("<>");
    setWords(wordsli);
    console.log(wordsli);
  }

  useEffect(() => {
    // Make sure passw is not empty before calling handleCollect
    if (passw) {
      handleCollect();
    }
  }, [passw]); // Add passw as a dependency to useEffect

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
