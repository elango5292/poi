"use client"
import { redirect,useParams, useSearchParams  } from 'next/navigation'
import { useState } from "react";
import CryptoJS from "crypto-js";


async function getTransactionData(HsH) {

    const rpcEndpoint = "https://rpc.ankr.com/eth_sepolia";

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
            return (responseData)

        } else {
            console.log("null")
        }
    } catch (error) {
        console.log("RPC request error:", error);
    }
}




 
export default function Profile() {
    const pathname = useParams();
    const prms = useSearchParams();
    const chain = prms.get('chain');
const [words, setWords] = useState("");

async function handleCollect(hs) {
    const recipt = await getTransactionData(hs)
    const cleanedHexString = recipt.result.input?.slice(2)
    const parts = CryptoJS.enc.Hex.parse(cleanedHexString)
    var STRtransaction = CryptoJS.enc.Utf8.stringify(parts);
    const wordsli = STRtransaction.split("<>");
    setWords(wordsli)}
    
handleCollect(pathname.hash)



  if (words) {
    redirect('/verify/'+words[1]+'/?p='+words[2]+"&chain="+chain)
  }
 

}