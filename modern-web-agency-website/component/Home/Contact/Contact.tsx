'use client'
import Image from "next/image"
import {useForm} from 'react-hook-form'

interface FormData {
    email: string;
    phoneNumber?: string;
    website?: string;
    message: string;
}

const Contact = () => {

    const {register , handleSubmit , reset , formState: {errors}} = useForm<FormData>()

    const onFormSubmit = async (data: FormData) => {
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data)  // ارسال به backend
            })
            if (response.ok) {
                alert('Your Massage Was Sent')
                reset()
            } else {
                const error = await response.json()
                alert(`Eror: ${error.massage || 'please try again'}`)
            }
        }catch(error) {
            alert('Error accured')
        }  
    }

  return (
    <div id="contact" className="py-20">
        <div>
            <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
                Our Contact Information
            </h1>
            <h1 className="text-center text-3xl  md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
                Join Our Workplaces Around The World
            </h1>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto ">
            <Image 
                src={'/images/map.png'}
                alt='map'
                width={900}
                height={900}
                className="mx-auto mt-16"
            />
            <div className="mt-16">
                <h1 className="text-xl font-semibold">
                    Send Massage
                </h1>
                {/* Form Section */}
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        
                    {/* input email */}
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="border-2 border-gray-200 px-4 py-3 outline-none rounded-full" 
                                {...register('email', { 
                                    required: 'Email is required' ,
                                    pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email'
                                }})
                                }/>
                            {errors.email && <p className="text-red-500 text-xs mt-2  absolute -bottom-6 left-2">{errors.email.message}</p>}
                        </div>

                    {/* input phoneNumber */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Phone Number" 
                                className="border-2 border-gray-200 px-4 py-3 outline-none rounded-full" 
                                {...register('phoneNumber', { 
                                    required: 'Phone Number is required' ,
                                    pattern: {
                                        value: /^[0-9]{10,11}$/,  // فقط 10 یا 11 رقم
                                        message: 'enter valid phone number (10-11 digits)'
                                    }
                                })}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-xs mt-2 whitespace-nowrap  absolute -bottom-6 left-2">{errors.phoneNumber.message}</p>}
                        </div>

                    {/* input Website */}                
                        <input 
                            type="text" 
                            placeholder="Website" 
                            className="border-2 border-gray-200 px-4 py-3 outline-none rounded-full" 
                            {...register('website')}
                        />
                    {/* Text Area */}
                    </div>
                    <div className="relative">                       
                        <textarea 
                            placeholder="Your Massage Here"
                            rows={9} 
                            className="mt-10 w-full border-2 outline-none border-gray-200 px-4 py-3 rounded-lg"
                            {...register('message',{
                                required: 'You Neeed Write Somthing',
                                
                            })}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-2 absolute -bottom-6 left-60">{errors.message.message}</p>}
                        </div>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mt-3 rounded-full font-medium transition-colors cursor-pointer">
                        Send Massage
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact