'use client'
import React, { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";

import { CgProfile } from "react-icons/cg";
import { LuExternalLink } from "react-icons/lu";

import dynamic from 'next/dynamic'
import { MdHideSource } from 'react-icons/md';
import Link from 'next/link'

const Verifyform = dynamic(() =>
    import("../../components/verifyForm"), {
        loading: () =>   <div className="flex items-center justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
      </div>,
      }
)






const TransactionDetails = () => {
    const [transactionDetails, setTransactionDetails] = useState(null);
    const [transactionHash, setTransactionHash] = useState("");
    const [words, setWords] = useState("");
    const [time, setTime] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [transactionData, settransactionData] = useState("")



    async function getTransactionData(HsH) {

        // const rpcEndpoint = "https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/";

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
                return (responseData)

            } else {
                console.log("null")
            }
        } catch (error) {
            console.log("RPC request error:", error);
        }
    }

    async function getTime(bnum) {

        const rpcEndpoint = "https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/";

        const requestObject = {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [bnum, false],
            id: 1,
        };

        const response = await fetch(rpcEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestObject),
        });

        const responseData = await response.json();
        const timestamp = parseInt(responseData.result.timestamp * 1000)
        const date = new Date(timestamp);
        //       const year = date.getFullYear();
        //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
        //   const day = String(date.getDate()).padStart(2, '0');
        //   const hours = String(date.getHours()).padStart(2, '0');
        //   const minutes = String(date.getMinutes()).padStart(2, '0');
        //   const seconds = String(date.getSeconds()).padStart(2, '0');
        //   console.log(month,day,hours,minutes,date)
        setTime(date.toUTCString())

    }

    // 0x57feca6354cf32ad64b208a1dcb5a655557789e2a05c5b47d645b3f2b4a84c5f
    // 0xbeebb8a6d124b682fd96f73ef3aacd5e2b7ae74b90e5191f8acaae7aee02edef
    async function handleCollect() {
        const recipt = await getTransactionData(transactionHash)
        settransactionData(recipt.result.input)
        const blockNum = recipt.result.blockNumber
        getTime(blockNum)
        const cleanedHexString = recipt.result.input?.slice(2)
        const parts = CryptoJS.enc.Hex.parse(cleanedHexString)
        var STRtransaction = CryptoJS.enc.Utf8.stringify(parts);
        const wordsli = STRtransaction.split("<>");
        setWords(wordsli)


    }


    function handleverify() {
        setShowPopup2(true);


    }
    function handleSubmit() {

        handleCollect()
        setShowPopup(true)

    }

    return (
        <main>
            <div>
                {/* <h1 className="grid text-center mx-4 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4">Verify your Invention</h1> */}



                <form className='grid text-center mx-4 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 mb-4'>
                    <p className="p-2">Enter your Publish Hash</p>
                    <input
                        type="text"
                        className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
                        value={transactionHash}
                        onChange={(e) => setTransactionHash(e.target.value)}
                        placeholder="Transaction Hash"
                    />

                    <p
                        onClick={handleSubmit}
                        className="text-2xl m-5 cursor-pointer select-none w-auto rounded-md bg-white/80 bg-transparent-30 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Search
                </p>
                </form>



                {(showPopup) && (
                    <div
                        className=" mx-4 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 mb-4">

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">

                                <div className="text-left">
                                    <div className="font-small text-gray-500">
                                        {time}
                                    </div>

                                    <a href={`/verify/${words[1]}/?p=${words[2]}`} target="_blank">
                                        <b className="text-white-700 my-5">
                                            {words[4]} <LuExternalLink className="inline" />
                                        </b>
                                    </a>
                                    {/* 0x643f6edee82b7e98d682a0b9ede3ab1dd4676fa199ee2a383a3ccabe0f096e69 */}

                                    <div className="font-small text-sm text-white my-2 flex items-center">
                                        {(words[0] === "1x") ? 
                                        <p>
                                            <CgProfile className="mx-2 inline" />{words[3]}
                                         </p> : <p><MdHideSource className="mx-2 inline" /> "Annonymous"</p>}
                                    </div>


                                    {words[4] && (<div className="rounded-lg border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 flex items-center justify-center py-3 px-4 mt-5">

                                        <Link className="text-[12px] md:text-[14px] text-white p-5 hover:cursor-pointer" onClick={handleverify} href="#enteryourdetails">
                                            Verify Ownership
   
                                    </Link> </div>)}
                                </div>


                            </div>
                        </div>



                    </div>
                )}


                {(showPopup2) && (
                    <div className="mx-4 mt-9 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3 mb-4">
                        <Verifyform id="verifyform" username={words[3]} userid={words[7]} userdob={words[6]} anon={words[0]} />
                    </div>
                )


                }

            </div>


        </main>
    );
};

export default TransactionDetails;
