import React from 'react'

const Order = () => {
  return (
    <div
      data-aos='zoom-in' 
      data-aos-anchor-placement='top-center'

      className='py-20 bg-[#eff3f6] dark:bg-gray-900'>
      <div>
        <h1 className='text-red-500 dark:text-red-300 font-semibold text-center'>
          Booking
        </h1>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider'>
          Book Service Online
        </h1>
      </div>
      <p className='mt-6 px-4 text-gray-500 dark:text-gray-300 leading-relaxed text-center sm:w-[80%] lg:w-[60%] mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta ad recusandae assumenda nisi, quia doloribus quis quisquam cupiditate officia sed facilis rem praesentium saepe deserunt molestias debitis nemo maxime voluptatum. A exercitationem molestiae laborum obcaecati esse distinctio explicabo quisquam.
      </p>
      <div className="text-center mt-10">
        <button className='text-white rounded-full px-14 py-4 cursor-pointer group bg-pink-600 hover:bg-pink-500 transition-colors duration-200'>
          <p className='group-hover:text-gray-200'>Book Now</p>
          </button>
      </div>
    </div>
  )
}

export default Order