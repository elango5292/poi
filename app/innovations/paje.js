'use client'
import { useState, useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdHideSource } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'
import debounce from 'lodash/debounce'
import Footer from './../../components/footer'
import Innovationload from '@/components/skeletons/innovationload'
import { Button } from '@/components/ui/button'
function Page ({ item }) {
  return (
    <Link href={`/innovations/${item.hash}/?chain=${item.chain}`}>
      <div
        className='flex flex-col flex-wrap bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px] my-1 py-4 pl-4'
        key={item.id}
      >
        <>
          <p className='font-light text-[#DADADA] tracking-[0.2px]'>
            {item.date}
          </p>
        </>
        <>
          <h1 className='font-bold tracking-[-0.01px] text-[#DADADA] mr-2 my-2'>
            {item.title}
          </h1>
        </>
        <>
          {item.author !== 'Annonymous' ? (
            <p className='mr-2'>
              <CgProfile className='mr-2 font-medium text-[#DADADA] tracking-[-0.085px] inline' />
              {item.author}
            </p>
          ) : (
            <p className='mr-2'>
              <MdHideSource className='mx-2 inline text-[#DADADA]' />{' '}
              "Annonymous"
            </p>
          )}
        </>
      </div>
    </Link>
  )
}

function Loadskelelist () {
  let skelelist = []
  for (let i = 0; i < 10; i++) {
    skelelist.push(<Innovationload key={i} />)
  }
  return skelelist
}

export default function Verify () {
  const [load, setLoad] = useState(false)
  const [skeleload, skelesetLoad] = useState(true)
  const [pages, setPages] = useState([])
  const [search, setSearch] = useState('')
  const [hasMorePages, setHasMorePages] = useState(true) // Track if there are more pages to load
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = debounce(e => {
    if (e.target.value === '') {
      setCurrentPage(1)
      updater(1, '')
    } else {
      setCurrentPage(1)
      updater(1, e.target.value)
    }
  }, 700)

  function updater (cnt, search) {
    handlePagi(cnt, search).then(data => {
      setPages(data.ddf)
      setHasMorePages(data.hasMorePages) // Update hasMorePages state
    })

    setLoad(false)
  }

  useEffect(() => {
    setLoad(true)
    updater(1, '')
  }, [])

  useEffect(() => {
    if (pages.length > 0) {
      skelesetLoad(false)
    }
  }, [pages])
  async function handlePagi (cnt, s) {
    try {
      const response = await fetch(`/api/innovations?page=${cnt}&s=${s}`)
      const data = await response.json()
      return {
        ddf: data.ddf,
        hasMorePages: data.message !== 'Complete' // Check if there are more pages
      }
    } catch (error) {
      console.error(error)
    }
  }

  function inputg (e) {
    setLoad(true)
    setSearch(e.target.value)
    handleSearch(e)
  }

  const loadMore = () => {
    if (hasMorePages) {
      setCurrentPage(currentPage + 1)
      debouncedLoadmorer()
    }
  }

  async function originalLoadmorer () {
    try {
      const data = await handlePagi(currentPage + 1, search)
      if (data.hasMorePages) {
        setPages(prevPages => [...prevPages, ...data.ddf])
      } else {
        setHasMorePages(false)
      }
    } catch (error) {
      console.error('Error loading more pages:', error)
    }
  }

  const debouncedLoadmorer = debounce(originalLoadmorer, 1000)

  return (
    <div>
      <div className='flex justify-center mt-24 h-screen'>
        <div className='flex flex-row w-screen min-h-screen justify-center content-start mx-4 flex-wrap'>
          <div className='relative mt-3 mr-5'>
            <i className='absolute top-0 left-0'>
              <AiOutlineSearch className='w-5 h-5 mt-2.5 ml-2 text-white-100 focus:text-white' />
            </i>
            <input
              className='rounded-md pl-8 bg-black px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-100 sm:text-sm sm:leading-5 mb-4 bg-transparent border-[1px] border-[#5a5a5a]  md:w-[200px] w-11/12'
              value={search}
              onChange={e => {
                inputg(e)
              }}
              placeholder='search..'
            />
          </div>

          <div className='flex flex-col min-h-[65vh] mx-2 w-screen sm:w-3/5'>
            {skeleload ? (
              <Loadskelelist />
            ) : (
              pages.map(item => <Page key={item.id} item={item} />)
            )}

            {load ? (
              <p>Loading...</p>
            ) : (
              hasMorePages && ( // Render "Load More" button only if there are more pages to load
                <button className='my-5' onClick={loadMore}>
                  Load More
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
{
  /* <div className="relative mt-3 mr-5">
          <i className="absolute top-0 left-0">
            <AiOutlineSearch className="w-5 h-5 mt-2.5 ml-2 text-white-100 focus:text-white" />
          </i>
          <input
            className="rounded-md pl-8 bg-black px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-100 sm:text-sm sm:leading-5 mb-4 bg-transparent border-[1px] border-[#5a5a5a]  md:w-[200px] w-11/12"
            value={search}
            onChange={(e) => {
              inputg(e);
            }}
            placeholder="search.."
          />
        </div> */
}
