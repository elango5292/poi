import ContentLoader from 'react-content-loader'

function Hy () {
  return (
    <div>
      <div className=' bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px]  py-3 pl-4'>
        <ContentLoader
          speed={2}
          backgroundColor='#171717'
          foregroundColor='#3b3b3b'
          className='x-0 y-0 h-[73px] md:h-[95px] w-[286px] md:w-[406px] '
        >
          <rect
            rx='3'
            ry='3'
            className='h-[1.2em]  w-[40%] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[10px]'
          />
          <rect
            rx='3'
            ry='3'
            className='h-[1.2em]  w-[95%] translate-x-[0px] translate-y-[25px] md:translate-x-[0px] md:translate-y-[35px]'
          />
          <circle
            r='10'
            className='translate-x-[11px] translate-y-[62px] md:translate-x-[11px] md:translate-y-[72px]'
          />
          <rect
            rx='3'
            ry='3'
            className='h-[1.2em]  w-[30%] translate-x-[26px] translate-y-[52.5px] md:translate-x-[26px] md:translate-y-[62.5px]'
          />
        </ContentLoader>
      </div>
    </div>
  )
}
function huh () {
  return <Hy />
}
export default huh

{
  /* <div className=" mt-24 flex flex-col flex-wrap bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px] my-1 py-4 pl-4">
<>
              <p className="font-light text-[#DADADA] tracking-[0.2px]">Wed, 15 Nov 2023 08:33:00 GMT</p>
          </>
          <>
              <h1 className="font-bold tracking-[-0.01px] text-[#DADADA] mr-2 my-2">Chelsea FC face new questions over how</h1>
          </>
          <>
              {true ? (
                  <p className="mr-2">
                      <CgProfile className="mr-2 font-medium text-[#DADADA] tracking-[-0.085px] inline" />
                      QWERTYUIOP
                  </p>
              ) : (
                      <p className="mr-2">
                          <MdHideSource className="mx-2 inline text-[#DADADA]" /> "Annonymous"
                      </p>
                  )}
          </>
</div> */
}
