import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import type { userReviewData } from "../../../db/userReviewData";


const ClientReviewCard = ({user}:{user: userReviewData}) => {
  return (
    <div className="bg-gray-100 rounded-lg m-3 p-6 relative flex flex-col">
        <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20" />
        <div className="mt-6 flex items-center">
            <FaStar className="w-4 h-4 text-yellow-600"/>
            <FaStar className="w-4 h-4 text-yellow-600"/>
            <FaStar className="w-4 h-4 text-yellow-600"/>
            <FaStar className="w-4 h-4 text-yellow-600"/>
            <FaStar className="w-4 h-4 text-yellow-600"/>
        </div>
        <p className="mt-6 text-base text-gray-600 font-semibold h-[150px]">
            {user.review}
        </p>
        <div className="w-full h-[1.2px] bg-gray-600/10 my-6 "/>
        <div className="flex items-center space-x-4 mt-auto">
            <Image 
                src={user.userImage}
                alt="users images"
                width={50}
                height={50}
                className="rounded-full"
            />
            <div className="h-[90px]">
                <h1 className="font-bold text-gray-800">
                    {user.name}
                </h1>
                <p className="text-sm text-gray-500">
                    {user.profession}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewCard