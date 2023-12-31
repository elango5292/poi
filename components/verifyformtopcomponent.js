'use client'

import { CgProfile } from 'react-icons/cg'
import { MdHideSource } from 'react-icons/md'
import { LuExternalLink } from 'react-icons/lu'

export default function verfytopcomponent ({ words, pwords, chain, ph }) {
  return (
    <div className='flex overflow-hidden flex-col mt-4 mx-auto'>
      <div className='flex flex-col w-[320px]   md:w-[675px] rounded-2xl  mx-auto md:mx-[0px] px-[13px] py-[21px] md:px-[37px] md:py-[19px]  md:h-[130px] h-[130px] flex-shrink-0 border-solid border-[1px] border-gray-700 bg-gradient-to-b from-[#0F0F0F] to-[#000]'>
        <a
          href={`/verify/${words[1]}/?p=${encodeURIComponent(
            words[2]
          )}&chain=${chain}&ph=${ph}`}
          target='_blank'
          className='flex flex-row items-center'
        >
          <p className='md:max-w-[450px] md:w-fit md:mr-2 w-[183px] h-auto truncate md:text-[18px] text-[14px] text-ellipsis overflow-hidden break-words text-[#D9D9D9] font-medium'>
            {pwords.words[4]}
          </p>
          <LuExternalLink className='inline' />
        </a>

        <div className='font-extralight md:text-[14px] text-[12px]  text-[#BEBEBE] md:my-[11px] my-[8px]  flex items-center'>
          {pwords.words[0] === '1x' ? (
            <p>
              <CgProfile className='mr-2 inline' />
              {pwords.words[1]}
            </p>
          ) : (
            <p className=''>
              <MdHideSource className='mr-2 inline ' /> Annonymous
            </p>
          )}
        </div>

        <div className='font-extralight md:text-[14px] text-[12px]  text-[#BEBEBE] md:mb-[11px] mb-[8px]  flex items-center'>
          <p>{pwords.date}</p>
        </div>
      </div>
    </div>
  )
}
