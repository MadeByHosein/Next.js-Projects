import Logo from '@/component/Helper/Logo'
import Image from 'next/image'
import {FaFacebookF , FaYoutube , FaInstagram , FaPhone} from 'react-icons/fa'
import {HiLocationMarker } from 'react-icons/hi'
import { IoMailOpen } from 'react-icons/io5'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { BiCalendar } from 'react-icons/bi'



const Footer = () => {
  return (
    <div className='bg-blue-950 flex flex-col dark:bg-gray-900 py-12 px-6 sm:px-12  lg:px-18 md:py-15'>
        {/* Up Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>

            {/* first part */}
            
            <div className=''>              
                <Logo /> 
                <p className='text-sm text-gray-300 leading-relaxed mt-7'>Read our Terms, Conditions of Use, features, services, new guests list, and meet the team </p>             
                {/* Social Icons */}
                <div className='flex gap-5 mt-6'>
                    <div className='h-12 w-12 rounded-lg bg-gray-700 hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center cursor-pointer'>
                        <FaFacebookF className='w-6 h-6 text-white'/>
                    </div>
                    <div className='h-12 w-12 rounded-lg bg-gray-700 hover:bg-red-600 transition-colors duration-300 flex items-center justify-center cursor-pointer'>
                        <FaYoutube className='w-6 h-6 text-white'/>
                    </div>
                    <div className='h-12 w-12 rounded-lg bg-gray-700 hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center cursor-pointer'>
                        <FaInstagram className='w-6 h-6 text-white'/>
                    </div>
                </div>
            </div>

            {/* 2nd Part */}

            <div>
                <div className='mt-2'>
                    <h1 className='font-bold text-white'>Address</h1>
                </div>
                <div className='mt-9 flex items-center justify-start gap-2 text-sm text-gray-300'>
                    <HiLocationMarker  className='w-6 h-6 text-white shrink-0'/>
                    <p className='font-medium text-sm text-white'>Guilan, Rasht, Janbazan Intersection</p>
                </div>
                <div className='mt-7 flex items-center justify-start gap-2 text-sm text-gray-300'>
                    <FaPhone  className='w-5 h-5  text-white shrink-0'/>
                    <p className='font-medium text-sm text-white'>+98 911 123 4567</p>
                </div>
                <div className='mt-7 flex items-center justify-start gap-2 text-sm text-gray-300'>
                    <IoMailOpen  className='w-5 h-5  text-white shrink-0'/>
                    <p className='font-medium text-sm text-white'>Example@gmail.com</p>
                </div>
            </div>

            {/* 3rd Part */}

            <div>
                <div className='mt-2'>
                    <h1 className='font-bold text-white'>More Services</h1>
                </div>
                <div className='flex items-center mt-9 justify-start gap-2 text-sm text-gray-300'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                    <p className='font-medium text-sm text-white'>UI Design</p>
                </div>
                <div className='flex items-center mt-2 justify-start gap-2 text-sm text-gray-300'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                    <p className='font-medium text-sm text-white'>UX Design</p>
                </div>
                <div className='flex items-center mt-2 justify-start gap-2 text-sm text-gray-300'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                    <p className='font-medium text-sm text-white'>Web App</p>
                </div>
                <div className='flex items-center mt-2 justify-start gap-2 text-sm text-gray-300'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                    <p className='font-medium text-sm text-white'>Digital Marketing</p>
                </div>
                <div className='flex items-center mt-2 justify-start gap-2 text-sm text-gray-300'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                    <p className='font-medium text-sm text-white'>Video Editing</p>
                </div>
            </div>

            {/* 4th Part */}

            <div>
                <div className='mt-2'>
                    <h1 className='font-bold text-white'>NewsLetter</h1>
                </div>
                <div className='flex items-center mt-9 justify-start gap-2 text-sm text-gray-300'>
                    <p className='font-medium text-sm text-white'>
                        It is a long established fact that a reader will be distracted.
                    </p>
                </div>
                <div className='flex gap-5 mt-5 '>
                    <Image 
                        src={'/images/f.jpg'}
                        alt='footer image'
                        width={80}
                        height={25}
                        className='shrink-0'
                    />
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <BiCalendar className='text-amber-300 w-6 h-6 '/>
                            <p className='text-xs text-white font-semibold'>24 May ,2026</p>
                        </div >
                        <p className='text-xs text-white font-bold '>
                            The Standard Chunk Of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Down Side */}

        <div>
            <div className='w-full h-[1.5px] bg-gray-400 my-10' />
            <p className='text-white'>©WebDev 2026 | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer