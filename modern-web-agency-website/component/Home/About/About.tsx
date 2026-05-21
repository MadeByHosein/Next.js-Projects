import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-20 dark:bg-gray-950 '>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ">
        {/* Image Content */}
        <div>
          <Image 
           src={'/images/a1.png'}
           alt='About us'
           width={500}
           height={500}
          />
        </div>
        {/* Text Content */}
        <div>
          {/* sub heading */}
          <div>
            <h1 className='text-purple-800 dark:text-purple-600 font-medium '>
              About Us
            </h1>
          </div>
          {/* Heading */}
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mt-2'>
            We Are The Leader In Web Design
          </h1>
          {/* description */}
          <p className='text-gray-500 dark:text-gray-200 text-base leading-6 mt-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores quo quae expedita optio possimus aut quos facere earum modi!
          </p>
          <p className='text-gray-500 dark:text-gray-200 text-base leading-6 mt-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus ab vitae impedit dolorem nihil voluptate aspernatur omnis suscipit ex?
          </p>
          {/* Stats */}
          <div className='mt-10'>
            <div className='flex items-center justify-between'>

              <div >
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700'>
                  53K
                </h1>
                <p className='text-center text-xs sm:text-sm md:text-base font-medium text-gray-500'>
                  Layout Done
                </p>
              </div>

              <div >
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700'>
                  10K
                </h1>
                <p className='text-center text-xs sm:text-sm md:text-base font-medium text-gray-500'>
                  Project Done
                </p>
              </div>

              <div >
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700'>
                  120
                </h1>
                <p className='text-center text-xs sm:text-sm md:text-base font-medium text-gray-500'>
                  Get Awards
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About