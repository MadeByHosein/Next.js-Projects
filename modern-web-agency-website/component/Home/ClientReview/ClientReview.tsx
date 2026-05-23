'use client'

import {userReviewData} from '../../../db/userReviewData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from './ClientReviewCard';

const ClientReview = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 764 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='py-20'>
        <div className='w-[80%] mx-auto '>
            <div>
                <h1 className='text-red-500 dark:text-red-300 font-medium'>
                    Client Reviews
                </h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider'>
                    Don't Just Take Our Words For It
                </h1>
            </div>
            <div className='mt-14'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}              
                transitionDuration={500}
                
                >
                {userReviewData.map((user)=>(
                    <div key={user.id} className='h-full'>
                        <ClientReviewCard user={user}/>
                    </div>
                ))}
            </Carousel>

            </div>
        </div>     
    </div>
  )
}

export default ClientReview