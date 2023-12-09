'use client'
import { LuExternalLink } from 'react-icons/lu'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Badge } from '@/components/ui/badge'

export default function confirmed ({ words,chain, pwords, ph,userDetail }) {
  // w-[95%] flex flex-col md:w-[60%] pt-[45px] md:pt-[47px] mx-auto md:max-w-[685px] max-h-[620px] md:max-h-[645px] border-[#5A5A5A] border border-solid border-[0px]
  return (
    <div className='w-[95%]  flex flex-col md:w-[60%]  mx-auto md:max-w-[685px] max-h-[620px] md:max-h-[645px]  '>
      <h3 className='mx-auto text-center text-lg font-semibold mb-[18px] md:mb-4'>
        Your details confirmed!
      </h3>
      <Confirmed1 words={words} pwords={pwords} ph={ph} chain={chain}/>
      <Badge className='text-[#d5d5d5] my-[20px] px-5 py-3 border-[#5A5A5A]  border-solid border-[1px] ring-1 ring-inset ring-white/10 rounded-full w-fit mx-auto badgebox'>
        <IconCheck className='h-4 w-4' />
        Confirmed
      </Badge>

      <div className=' flex items-center justify-center text-[#d5d5d5]'>
        <div className='w-96 ggg-black bg-transparent border-[0px] text-[#d5d5d5]'>
          <div className='text-center text-md mb-1 font-bold'>
            Author Details
          </div>
          <div className=' text-sm font-light'>
  <div className='flex justify-between font-light items-center'>
    <span className='text-right  w-1/2 pr-2 overflow-hidden overflow-ellipsis'>Name:</span>
    <span className='text-left w-1/2 overflow-hidden overflow-ellipsis'>{userDetail.name}</span>
  </div>
  <div className='flex justify-between items-center'>
    <span className='text-right w-1/2 pr-2 overflow-hidden overflow-ellipsis'>Date of Birth:</span>
    <span className='text-left w-1/2 overflow-hidden overflow-ellipsis'>{userDetail.date}</span>
  </div>
  <div className='flex justify-between items-center'>
    <span className='text-right w-1/2 pr-2 overflow-hidden overflow-ellipsis'>ID Number:</span>
    <span className='text-left w-1/2 overflow-hidden overflow-ellipsis'>{userDetail.id}</span>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

function Confirmed1 ({ words, pwords, ph,chain }) {
  return (
    <div className='mx-auto w-full'>
      <div className='flex flex-col mx-auto w-[90%] rounded-md   px-[13px] py-[21px]   md:h-[130px] h-[130px] flex-shrink-0 border-solid border-[1px] border-gray-700 confirmedcontainer1 ggg-[#060606] ring-1 ring-inset ring-white/10'>
        <a
          href={`/verify/${words[1]}/?p=${encodeURIComponent(
            words[2]
          )}&chain=${chain}&ph=${ph}`}
          target='_blank'
          className='flex flex-row items-center mx-auto'
        >
          <p className='md:max-w-[90%]  md:w-auto md:mr-2 w-[90%] h-auto truncate md:text-sm text-[14px] text-ellipsis overflow-hidden break-words text-[#D9D9D9] font-light'>
          {pwords.words[4]}
          </p>
          <LuExternalLink className='inline' />
        </a>

        <div className='font-extralight md:text-sm mx-auto text-[12px]  text-[#BEBEBE] md:mb-[11px] mb-[1px]  flex items-center'>
          <p>{pwords.date}</p>
        </div>

        <div className='pl-[14px] mt-[16px] md:mt-[0px] mx-auto flex flex-row  rounded-[9px] ggg-[#070707] box-border w-[95%] h-[35px] md:h-[35px] border-[1px] border-[#585858] border-solid border-d'>
          <div className='flex items-center w-full justify-between '>
            <p className='text-[12px] font-light md:text-xs md:mt-1 mt-[0px] overflow-x-hidden mr-1 w-[90%]  text-ellipsis overflow-hidden h-auto text-[#DADADA]'>
              {ph}
            </p>

            <div className='mr-1'>
              <CopyToClipboard text={ph} onCopy={() => {}}>
                <div className=''>
                  {false ? (
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
    </div>
  )
}

function IconCheck (props) {
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
      <polyline points='20 6 9 17 4 12' />
    </svg>
  )
}
