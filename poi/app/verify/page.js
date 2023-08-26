'use client'
import React, { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";

import { CgProfile } from "react-icons/cg";
import { LuExternalLink } from "react-icons/lu";

import dynamic from 'next/dynamic'
import { MdHideSource } from 'react-icons/md';
import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



const Verifyform = dynamic(() =>
    import("../../components/verifyForm"), {
        loading: () =>   <div className="flex items-center justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
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
    const [chain, setchain] = useState("1");
    const [rpc, setrpc] = useState("");

    useEffect(() => {
        setrpc(networks[chain].rpc)
       
    }, [chain]);

    const networks = {
        11155111: {
          network: "sepolia",
          rpc: "https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/"
        },
        80001: {
          name: "Polygon Mumbai",
          rpc: "https://matic-mumbai.chainstacklabs.com"
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
      


    async function getTransactionData(HsH) {

        const rpcEndpoint = rpc;

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
                return (responseData)

            } else {
                console.log("null")
            }
        } catch (error) {
            console.log("RPC request error:", error);
        }
    }

    async function getTime(bnum) {

        const rpcEndpoint = rpc

        const requestObject = {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [bnum, false],
            id: chain,
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
    function handleSubmit(e) {
        e.preventDefault();
        handleCollect()
        setShowPopup(true)

    }

   
    const FormSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
      })

      const form = useForm({
        resolver: zodResolver(FormSchema),
      })


      function onSubmit(data) {
        handleCollect()
        setShowPopup(true)
      }


    return (
        <main>
            <div>

          


                <div className=' mx-4 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 px-5 py-5 mb-4'>
               


    <Form {...form}>
      <form className="w-2/3 mt-5 mb-5 space-y-6">
        <FormField
          control={form.control}
          name="Publish Hash"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publish Hash</FormLabel>
              <FormControl>
                <Input placeholder="0x1231..." {...field} value={transactionHash} onChange={(e) => setTransactionHash(e.target.value)}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<div className="flex overflow-auto justify-between items-center">
<Select onValueChange={setchain} className="self-center ">
      <SelectTrigger className="w-[180px] mx-1 my-2">
        <SelectValue placeholder="Select Chain" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Chains Available</SelectLabel>
          <SelectItem value="11155111">Sepolia</SelectItem>
<SelectItem value="80001">Polygon Mumbai</SelectItem>
<SelectItem value="97">BSC Testnet</SelectItem>
<SelectItem value="43113">Avalanche Fuji</SelectItem>
<SelectItem value="42161">Arbitrum One</SelectItem>
<SelectItem value="43114">Avalanche</SelectItem>
<SelectItem value="137">Polygon</SelectItem>
<SelectItem value="56">BNB Smart Chain</SelectItem>
<SelectItem value="1">Ethereum</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>

        <Button onClick={handleSubmit} className="mx-2">Search</Button>
{/* 0xcec6c8b7c08879c46905edd151f1a16b3d89de342926cf81a62efa0e86e3f481 */}
        </div>
      </form>
    </Form>
    


        
                </div>



                {(showPopup) && (
                    <div
                        className=" mx-4 sm:mx-8 md:mx-auto md:w-2/3 lg:w-1/2 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 mb-4">

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">

                                <div className="text-left">
                                    <div className="font-small text-gray-500">
                                        {time}
                                    </div>

                                    <a href={`/verify/${words[1]}/?p=${words[2]}&chain=${chain}`} target="_blank">
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
