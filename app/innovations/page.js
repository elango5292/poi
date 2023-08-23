'use client'
import { useState } from "react"
import useSWR from 'swr'

import { CgProfile,MdHideSource } from "react-icons/cg";

import { AiOutlineSearch } from "react-icons/ai";
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Page ({ index }) {
 

  const { data, error, isLoading } = useSWR('/api/innovations?page=1', fetcher)
  
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else {
    console.log(data)
    return (data.ddf.map((item) => <div className=" flex flex-col flex-wrap bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#cecece] rounded-[4px] border-[1px] my-1 py-4 pl-4" key={item.id}><><p className="font-light tracking-[0.2px]">12-03-2023</p></>
    <><h1 className="font-bold tracking-[-0.1px] mr-2	my-2">{item.title}</h1></>
    <>{(item.author != "Annonymous")? <p className="mr-2">
                                                <CgProfile className="mr-2 font-medium tracking-[-0.085px] inline" />{item.author}
                                             </p> : <p className="mr-2"><MdHideSource className="mx-2 inline" /> "Annonymous"</p>}
                                             
                                            </></div>))
  }
}

export default function verify() {
  const [pageIndex, setPageIndex] = useState(0);
  const [cnt, setCnt] = useState(1)

  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<Page index={i} key={i} />)
  }


  return(
    <div className=" flex justify-center h-screen">
    <div className="flex flex-row w-screen justify-center mx-4 flex-wrap">
    <div className="relative mt-3 mr-5">
  <i className="absolute top-0 left-0">
    <AiOutlineSearch className="w-5 h-5 mt-2.5 ml-2 text-white-100 focus:text-white" />
  </i>
  <input className="rounded-md pl-8 bg-black px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-100 sm:text-sm sm:leading-5 mb-4 bg-transparent border-[1px] border-[#5a5a5a]  w-[200px]" placeholder="search.." />
</div>

      <div className="flex flex-col mx-2w-screen sm:w-3/5">
        {pages}
        <button className=" my-5 " onClick={() => setCnt(cnt + 1)}>Load More</button>
      
      </div>

      </div>
    </div>
  );
}
