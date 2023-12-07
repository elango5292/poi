"use client"
import fetchChainData from '@/lib/price'; 
import network from "@/lib/networks"

export default function yt() {

  async function getPrice(chainName) {
    try {
      const result = await fetchChainData(chainName);
      console.log(`Price of ${network(chainName,'name')}:`, 5/result.result[network(chainName,'id_usd')]);
    } catch (error) {
      console.error(`Error fetching price for ${chainName}:`, error);
    }
  }

  return (
    <div className="mt-24 flex-col flex gap-y-4">
      <button className='bg-[#dadada] text-black p-5 hover:bg-[#eeeeee]' onClick={() => getPrice('137')}>Get Price for Chain poly</button>
      <button className='bg-[#dadada] text-black p-5 hover:bg-[#eeeeee]' onClick={() => getPrice('1')}>Get Price for Chain eth</button>
      <button className='bg-[#dadada] text-black p-5 hover:bg-[#eeeeee]' onClick={() => getPrice('56')}>Get Price for Chain bnb</button>
      <button className='bg-[#dadada] text-black p-5 hover:bg-[#eeeeee]' onClick={() => getPrice('43114')}>Get Price for Chain ava</button>
      <button className='bg-[#dadada] text-black p-5 hover:bg-[#eeeeee]' onClick={() => getPrice('42161')}>Get Price for Chain arb</button>

    </div>
  );
}
