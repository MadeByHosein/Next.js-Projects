import { FaRocket , FaHammer } from "react-icons/fa6"
import { BiSupport } from "react-icons/bi"
import Image from "next/image"

const WhyChoose = () => {
  return (
    <div>
        {/* Text Content */}
      <div className="py-20 p-5 sm:p-10 md:p-15 flex flex-col md:flex-row gap-5">
        <div data-aos='fade-left' 
             data-aos-anchor-placement='top-center' 
             data-aos-delay='0'>

          <h1 className="text-red-500 dark:text-red-300 font-medium">
            Why Choose
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight my-2 text-gray-900 dark:text-gray-100">
            Specialist in aviding clients on financial chalengs
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-500 dark:text-gray-300">
            Corporate headquarters is the part of a corporate structure that deals with important tasks such as strategic planning
          </p>

          <div className="mt-8">
            
            {/* element_1 */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-18 h-18 flex items-center justify-center bg-red-600 dark:bg-pink-400 rounded-full">
                <FaRocket className="w-6 h-6 text-white"/>
              </div>
              
              <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  fast Working Process
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed lg:w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>  
            </div>

            {/* element_2 */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-18 h-18 flex items-center justify-center bg-blue-600 dark:bg-indigo-400 rounded-full">
                <FaHammer className="w-6 h-6 text-white"/>
              </div>
              
              <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Dedicated Team
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed lg:w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>  
            </div>

            {/* element_3 */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-18 h-18 flex items-center justify-center bg-green-600 dark:bg-yellow-400 rounded-full">
                <BiSupport className="w-6 h-6 text-white"/>
              </div>
              
              <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  24/7 Hours Support
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed lg:w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>  
            </div>

          </div>
        </div>
        {/* Image Content */}
        <div data-aos='fade-right' 
             data-aos-anchor-placement='top-center' 
             data-aos-delay='200'>

          <Image src={'/images/wc.png'} alt="fdsf" width={1000} height={1000}/>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose