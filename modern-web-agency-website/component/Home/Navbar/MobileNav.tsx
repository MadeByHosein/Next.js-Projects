
import { NAVLINKS } from '@/constants/constant'
import Link from 'next/link'
import {CgClose} from 'react-icons/cg'

type Props = {
  showNav: boolean ;
  closeNav: () => void ;
} 
const MobileNav = ({closeNav , showNav}: Props) => {
  
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${showNav ? 'translate-x-0' : '-translate-x-full'} inset-0 z-1002 bg-black opacity-70 transform transition-all duration-500 w-full h-screen`}></div>
      {/* NavLinks */} 
      <div className={`flex flex-col justify-center h-full fixed ${showNav ? 'translate-x-0' : '-translate-x-full'}  text-white transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-1050`} >
        {NAVLINKS.map((links)=>(
          <Link 
            key={links.id} 
            href={links.url}
          >
            <p className='text-white text-xl sm:text-3xl ml-12 w-fit border-b-[1.5px] border-white pb-1 '>{links.label}</p>
          </Link>
        ))}
        {/* Close tag */}
        <CgClose onClick={closeNav} className='absolute top-3 right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'/>
      </div>
       
    </div>
  )
}

export default MobileNav