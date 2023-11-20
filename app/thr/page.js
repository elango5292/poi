"use client"


import worder from "../../lib/postwords"
import networks from "@/lib/networks"
import Heroa2 from "@/components/heroa2"
import { useEffect, useState } from "react"
function page() {
    let hash="0x62ed94ac67b07acf3f3607406de0a95264557fbbfe24f181a413ce1911715ad8"
    let chain="80001"
    let rpc = networks(chain)
    let passw= "S5292s5292@#"
const [Confirmations,setConfirmations] = useState("")
    async function getLatestBlockNumber(rpc) {
      const rpcNodeURL = rpc;
      const response = await fetch(rpcNodeURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              jsonrpc: '2.0',
              id: chain,
              method: 'eth_blockNumber',
              params: [],
          }),
      });

      const data = await response.json();
      const latestBlockNumber = parseInt(data.result, 16);
      return latestBlockNumber;
  }

  async function getTransactionBlockNumber(txHash) {
      const rpcNodeURL = rpc;
      const response = await fetch(rpcNodeURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              jsonrpc: '2.0',
              id: chain,
              method: 'eth_getTransactionByHash',
              params: [txHash],
          }),
      });

      const data = await response.json();
      const transactionBlockNumber = parseInt(data.result.blockNumber, 16);
      return transactionBlockNumber;
  }

  async function checkConfirmations() {
      const latestBlockNumber = await getLatestBlockNumber(rpc);
          const transactionBlockNumber = await getTransactionBlockNumber(
              "0x62ed94ac67b07acf3f3607406de0a95264557fbbfe24f181a413ce1911715ad8"
          );

          const PostConfirmationCount = latestBlockNumber - transactionBlockNumber;

          setConfirmations(PostConfirmationCount);

 
  

  }

  useEffect(() => {
    const interval = setInterval(() => {
        checkConfirmations();
    }, 3000);

    return () => {
        clearInterval(interval);
    };
}, []);

  return (
    <div className="mt-24">Hello, the confirmation is {Confirmations}</div>
  )
}

export default Heroa2