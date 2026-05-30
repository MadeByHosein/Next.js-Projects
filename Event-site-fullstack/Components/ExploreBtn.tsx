'use client'
import { FaChevronDown } from 'react-icons/fa';


const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto"
     onClick={()=> console.log('Clicked')}>
        <a href="#events" className="flex items-center gap-2">
        Explore Events <FaChevronDown  width={24} height={24} />
        </a>
    </button>
  )
}

export default ExploreBtn