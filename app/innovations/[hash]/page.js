"use client"
import { redirect,useParams, useSearchParams  } from 'next/navigation'
import { useState,useEffect } from "react";
import CryptoJS from "crypto-js";




 
export default function Profile() {
    const pathname = useParams();
    const prms = useSearchParams();
    const chain = prms.get('chain');
const [words, setWords] = useState("");
var rpc=""

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
    if (selectedNetwork) {
        rpc = selectedNetwork.rpc;
        getTransactionData(pathname.hash).then((valueArray) => {setWords(valueArray) })
    }
    console.log("wordsw",words)
}, []);


async function getTransactionData(HsH) {

    const rpcE = rpc;

    const requestObject = {
        jsonrpc: "2.0",
        method: "eth_getTransactionByHash",
        params: [HsH],
        id: chain,
    };


    try {
        const response = await fetch(rpcE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestObject),
        });

        const responseData = await response.json();


        if (responseData && responseData.result) {
            const cleanedHexString = responseData.result.input?.slice(2)
            
            const parts = CryptoJS.enc.Hex.parse(cleanedHexString)
            
            var STRtransaction = CryptoJS.enc.Utf8.stringify(parts);
            
            const wordsli = STRtransaction.split("<>");
            return (wordsli)

        } else {
            console.log("null")
        }
    } catch (error) {
        console.log("RPC request error:", error);
    }
}


if (words) {
    redirect('/verify/'+words[1]+'/?p='+words[2]+"&chain="+chain)
  }



  
 

}