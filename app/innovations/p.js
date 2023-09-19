'use client'


import { useState, useEffect } from "react";
import useSWR from 'swr';

import { CgProfile } from "react-icons/cg";
import { MdHideSource } from "react-icons/md";

import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import debounce from 'lodash/debounce';



function Page({ item }) {
    return (
        <Link href={`/innovations/${item.hash}/?chain=${item.chain}`}>
            <div className="flex flex-col flex-wrap bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#cecece] rounded-[4px] border-[1px] my-1 py-4 pl-4" key={item.id}>
                <>
                    <p className="font-light tracking-[0.2px]">{item.date}</p>
                </>
                <>
                    <h1 className="font-bold tracking-[-0.1px] mr-2 my-2">{item.title}</h1>
                </>
                <>
                    {item.author !== "Annonymous" ? (
                        <p className="mr-2">
                            <CgProfile className="mr-2 font-medium tracking-[-0.085px] inline" />
                            {item.author}
                        </p>
                    ) : (
                            <p className="mr-2">
                                <MdHideSource className="mx-2 inline" /> "Annonymous"
                            </p>
                        )}
                </>
            </div>
        </Link>
    );
}


export default function Verify() {
    var cnt = 1;
    const [load, setLoad] = useState(false);
    const [pages, setPages] = useState([]);
    var pg = []
    const [search, setSearch] = useState("");


    const handleSearch = debounce((e) => {
        if (e.target.value ===""){
            
            cnt = 1
            updater(1, "")

        }else{
            cnt = 1
        updater(cnt, search)
        }
        
    }, 700);

    function updater(cnt, search) {
        handlePagi(cnt, search).then(data => {
            console.log("from updater", data)
            setPages(data.ddf)
        })
        setLoad(false)

    }


    useEffect(() => {
        setLoad(true)
        updater(1, "")
    }, [])





    function originalLoadmorer() {
        cnt += 1;
        handlePagi(cnt, search).then(data => {
            let li = []
            for (let i in data.ddf) {
                if (!pages.includes(data.ddf[i])) {
                    // setPages(prevPages => [...prevPages, data.ddf[i]]);
                    li = li.concat(data.ddf[i])
                    
                   
                }

            }
            setPages(prevPages => [...prevPages, ...li])
            li = []
        })
        console.log('from loadmores', pages)
    }

    const debouncedLoadmorer = debounce(originalLoadmorer, 700);

    const loadmorer = () => {
        debouncedLoadmorer();
      };


    async function handlePagi(cnt, s) {
        try {
            const response = await fetch(`/api/innovations?page=${cnt}&s=${s}`);

            const data = await response.json();
            
            return data

        } catch (error) {
            console.log(error);
        }}

        function inputg(e) {
            setLoad(true)
            setSearch(e.target.value);

            handleSearch(e);

            


        }


        return (
            <div className="flex justify-center mt-24 h-screen">
                <div className="flex flex-row w-screen justify-center mx-4 flex-wrap">
                    <div className="relative mt-3 mr-5">
                        <i className="absolute top-0 left-0">
                            <AiOutlineSearch className="w-5 h-5 mt-2.5 ml-2 text-white-100 focus:text-white" />
                        </i>
                        <input className="rounded-md pl-8 bg-black px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-100 sm:text-sm sm:leading-5 mb-4 bg-transparent border-[1px] border-[#5a5a5a]  w-[200px]" value={search} onChange={(e) => {
                            inputg(e)
                        }} placeholder="search.." />
                    </div>

                    <div className="flex flex-col mx-2w-screen sm:w-3/5">
                        {pages.map((item) => <Page key={item.id} item={item} />)}

                        {load ? (
                            <p>Loading...</p>
                        ) : (
                                <button className="my-5" onClick={() => { loadmorer() }}>
                                    Load More
                                </button>
                            )}
                    </div>
                </div>
            </div>
        );
    }