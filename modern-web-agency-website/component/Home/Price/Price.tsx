import React from 'react'
import {pricingData} from '../../../db/pricingData'


const Price = () => {
  return (
    <div className='py-20 bg-[#eff3f6] dark:bg-gray-900'>
        <div>
            <h1 className='text-red-500 dark:text-red-300 font-medium text-center'>
                Pricing Table
            </h1>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider'>
                Live Chat 24/7 support
            </h1>
        </div>
        
        {/* PriceCard */}
        <div className='w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center '>
            {pricingData.map(({id , title , price , description , features} ) => (

                <div key={id} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 text-center tracking-wider">
                        {title}
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-300 mb-6 text-center">
                        {description}
                    </p>
                    <h1 className="font-bold text-center text-gray-900 dark:text-gray-100">
                        <span className="text-5xl">${price}</span>
                        <span>/month</span>
                    </h1>
                    <div className="mt-8 space-y-4 text-sm text-gray-500 tracking-wider text-center dark:text-gray-100">
                        <ul>
                            {features.map((feature , index)=> (
                                <li key={index}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    
                    </div>
                    <div className="mt-6 mb-6 text-center">
                        <button className="px-8 py-3 bg-pink-500 hover:bg-pink-700 text-white font-semibold cursor-pointer rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default Price