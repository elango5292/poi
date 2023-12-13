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


