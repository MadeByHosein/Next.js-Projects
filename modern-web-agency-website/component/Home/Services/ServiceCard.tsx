'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt'

type Props = {
    icon: string ;
    title: string ;
    description: string ;
}


const ServiceCard = ({icon , title , description}:Props) => {
  return (

    <Tilt   
    tiltMaxAngleX={3}
    tiltMaxAngleY={3}
    perspective={1500}
    scale={1.05}
    transitionSpeed={1500}
    gyroscope={true}
    className='bg-white dark:bg-gray-800 rounded-lg p-4'>
        <div className='  '>
            <div className=' w-20 h-20 text-white bg-blue-100 rounded-full mx-auto mt-5 shadow-md flex flex-col items-center justify-center'>
                <Image src={icon} alt='icon' width={40} height={40}/>
            </div>
            <h1 className='text-center mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100 '>
                {title}
            </h1>
            <p className='text-center text-sm mt-2 leading-6 text-gray-400 dark:text-gray-300 p-4 '>
                {description}
            </p>
            <div className='text-center mx-auto flex justify-center items-center space-x-1 mb-4 text-gray-800 dark:text-gray-100 mt-4
            font-semibold cursor-pointer hover:text-red-400 transition- duration-200 '>
                <Link href='#' className='py-3' >
                    Learn More
                </Link>
                <FaArrowRight />
            </div>
        </div>
    </Tilt >
  )
}

export default ServiceCard