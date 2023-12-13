'use client'
import { useState, useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdHideSource } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import Notfound from "@/components/notfound"
import Link from 'next/link'
import debounce from 'lodash/debounce'
import Footer from './../../components/footer'
import Innovationload from '@/components/skeletons/innovationload'
import { Button } from '@/components/ui/button'
function Page ({ item }) {
  return (
    <Link href={`/innovations/${item.hash}/?chain=${item.chain}`}>
      <div
        className='flex flex-col animate-fade-in-up  mt-2 flex-wrap bg-transparent border-[#2b2b2b]  hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px] my-1 py-4 pl-4'
        key={item.id}
      >
        <>
          <p className='font-light text-[#DADADA] tracking-[0.2px]'>
            {item.date}
          </p>
        </>
        <>
          <h1 className='font-semibold tracking-[-0.01px] text-[#DADADA] mr-2 my-2'>
            {item.title}
          </h1>
        </>
        <>
          {item.author !== 'Annonymous' ? (
            <p className='mr-2 font-light text-[#DADADA]'>
              <CgProfile className='mr-2  text-[#DADADA] tracking-[-0.085px] inline' />
              {item.author}
            </p>
          ) : (
            <p className='mr-2 font-light text-[#DADADA]'>
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
  const [load, setLoad] = useState(true)
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
    setLoad(true)
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
        setLoad(false)
      } else {
        setHasMorePages(false)
        setLoad(false)
      }
    } catch (error) {
      console.error('Error loading more pages:', error)
    }
  }

  const debouncedLoadmorer = debounce(originalLoadmorer, 1000)

  return (
    <div>
      <section className='h-screen md:pl-[10%] pt-20 md:pt-16 flex-col md:flex-row flex overflow-auto'>
        <div className='md:w-64 mx-auto w-[100%] px-[10%] flex flex-col md:flex-none md:p-6 bg-black border-[#5c5c5c] md:border-r-[0px] md:border-b-[0px] border-b'>
          <div className='flex items-center md:mt-9 md:mb-[0px] mb-8 space-x-4'>
            <IconSearch className='h-5 w-5 text-[#DADADA]' />
            <input
              className='w-full h-10 pl-2 text-[#DADADA] bg-transparent rounded-md focus:outline-none  shadow-sm ring-1 ring-inset ring-[#5c5c5c] focus:ring-2 focus:ring-inset focus:ring-white-100'
              value={search}
              onChange={e => {
                inputg(e)
              }}
              placeholder='search..'
              type='text'
            />
          </div>
        </div>
        <div className='flex-1 md:scrollbar md:scrollbar-w-[2px] md:scrollbar-rounded md:scrollbar-thumb-[#3a3a3a] md:scrollbar-track-[#DADADA] overflow-y-auto p-6'>
          <div className='space-y-2  md:space-y-2'>
            {search.length === 0 ?  <h1 className='my-3 text-xl'>Recent Posts</h1>: <h1 className='my-3 text-xl'>Search Results</h1>}
           
            {skeleload ? (
              <Loadskelelist />
            ) : (
              <>
              {pages.length === 0 && <Notfound />}
              {pages.map(item => <Page key={item.id} item={item} />)}
            </>
            )}

            {load ? (
              <div className='mx-auto w-full'>
                <Button
                  className='bg-gradient-to-br from-[#DADADA] to-[#FFF] my-4 mx-auto text-black'
                  variant='outline'
                >
                  Loading
                  <IconRefresh className='animate-spin ml-2 h-4 w-4' />
                </Button>
              </div>
            ) : (
              hasMorePages && ( // Render "Load More" button only if there are more pages to load
                <div className=' mx-auto w-full'>
                  <Button
                    className=' bg-gradient-to-br from-[#DADADA] to-[#fafafa] my-4 mx-auto text-black'
                    onClick={loadMore}
                    variant='outline'
                  >
                    Load More
                    <IconArrowright className='ml-2 h-4 w-4' />
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

function IconSearch (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  )
}

function Component () {
  return (
    <>
      <Button className='bg-white text-black' variant='outline'>
        Load More
        <IconArrowright className='ml-2 h-4 w-4' />
      </Button>
      <Button className='bg-white text-black' variant='outline'>
        Loading
        <IconRefresh className='animate-spin ml-2 h-4 w-4' />
      </Button>
    </>
  )
}

function IconArrowright (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </svg>
  )
}

function IconRefresh (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
      <path d='M21 3v5h-5' />
      <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
      <path d='M8 16H3v5' />
    </svg>
  )
}
