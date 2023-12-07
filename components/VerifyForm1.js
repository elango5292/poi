'use client'
import { LuExternalLink } from 'react-icons/lu'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MdHideSource } from 'react-icons/md'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
export default function foras ({
  words,
  ph,
  handleverify,
  time,
  handleCopy,
  isCopied,
  chain,
  postfound
}) {
  return (
    <>
      <div className='flex overflow-hidden md:mb-9 mt-[40px] flex-col mx-auto'>
        <div className='w-[300px] mx-auto md:w-[524px] h-[1px] bg-gray-700' />
        <p className='md:mt-[24px] mt-[34px] mb-[24px] text-[#BEBEBE] text-[14px] ' id="results">
          Search Results :
        </p>
        {postfound ? <><div className='flex   flex-col  mx-auto md:mx-[0px] px-[13px] py-[21px] md:px-[37px] md:py-[32px] w-[300px] md:w-[522px] md:h-[242px] h-[290px] flex-shrink-0 border-solid border-[1px] border-gray-700 bg-[#060606]'>
          <div className='flex flex-col md:flex-row'>
            <div>
              <a
                href={`/verify/${words[1]}/?p=${encodeURIComponent(
                  words[2]
                )}&chain=${chain}&ph=${ph}`}
                target='_blank'
                className='flex flex-row items-center'
              >
                <p className='md:max-w-[233px] max-w-[183px] h-auto truncate md:text-[18px] text-[14px] text-ellipsis overflow-hidden break-words text-[white] font-medium'>
                  {words[4]}
                </p>
                <LuExternalLink className='inline ml-1' />
              </a>

              <div className='font-extralight md:text-[14px] text-[12px]  text-[#BEBEBE] md:my-[11px] my-[8px]  flex items-center'>
                {words[0] === '1x' ? (
                  <p>
                    <CgProfile className='mr-2 inline' />
                    {words[3]}
                  </p>
                ) : (
                  <p className=''>
                    <MdHideSource className='mr-2 inline ' /> Annonymous
                  </p>
                )}
              </div>

              <div className='font-extralight md:text-[14px] text-[12px]  text-[#BEBEBE]'>
                {time}
              </div>
            </div>

            <Link
              className='text-[12px] mt-[31px] flex justify-center items-center  md:text-[14px] rounded-md md:mx-auto  md:my-auto  bg-[#D9D9D9] text-black w-[263px] md:w-[132px] h-[30px] md:h-[41px]  hover:cursor-pointer'
              onClick={handleverify}
              href='#enteryourdetails'
            >
              Verify Authorship
            </Link>
          </div>
          <div className='w-[270px] mx-auto md:mx-[0px] md:w-[451px] my-[20px] h-[1px] bg-gray-700' />
          <div className='flex flex-col md:flex-row  md:items-center justify-between'>
            <p className='md:text-sm text-[12px] font-light'>Post Hash : </p>
            <div className='pl-[14px] mt-[16px] md:mt-[0px] flex flex-row  rounded-[9px] bg-[#070707] box-border w-[272px] md:w-[363px] h-[35px] md:h-[35px] border-[1px] border-[#585858] border-solid border-d'>
              <div className='flex items-center justify-between '>
                <p className='text-[12px] font-light md:text-xs md:mt-1 mt-[0px] overflow-x-hidden md:w-[310px] mr-1 w-[223px] text-ellipsis overflow-hidden h-auto text-[#DADADA]'>
                  {words[1]}
                </p>
                <div>
                  <CopyToClipboard text={words[1]} onCopy={handleCopy}>
                    <div className=''>
                      {isCopied ? (
                        <img
                          src='/copied.svg'
                          className='inline md:w-[12px]  w-[15px] h-auto'
                        />
                      ) : (
                        <img
                          src='/copy.svg'
                          className='inline hover:invert md:p-[5px]  md:w-[23px] w-[15px]  h-auto'
                        />
                      )}
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div></> :     <div key="1" className="scale-in-center max-w-[300px] md:max-w-[522px] mx-auto py-12 mt-4 px-4 sm:px-6 lg:px-8  bg-black">
      <div className="flex flex-col items-center space-y-4">
        <IconCube className="w-12 h-12 text-[#BEBEBE]" />
        <h2 className="text-lg font-bold text-center text-[#BEBEBE]">Oops! No Post Found...</h2>
       
      </div>
    </div>
}
        
      </div>
    </>
  )
}


function IconCube(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}
