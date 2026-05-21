'use client'
import ServiceCard from "./ServiceCard"


const Services = () => {
  return ( 
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Provided Features
        </h1>
      </div>
      {/* Service Cards */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective ">
        
          <ServiceCard 
            icon="/images/s1.png" 
            title="Design and develop" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          <ServiceCard 
            icon="/images/s2.png" 
            title="Account setting" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          <ServiceCard 
            icon="/images/s3.png" 
            title="Mange Notification" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          <ServiceCard 
            icon="/images/s4.png" 
            title="Customer Support" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          <ServiceCard 
            icon="/images/s5.png" 
            title="Email Marketing" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          <ServiceCard 
            icon="/images/s6.png" 
            title="Degital Agency" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sapiente?"
          />
          
        
      </div>
    </div>
  )
}

export default Services