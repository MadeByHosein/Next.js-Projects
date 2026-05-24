'use client'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible , setIsVisible] = useState(false)

    useEffect (()=> {
        const toggleVisibility = ()=> {
           if (window.scrollY > 700) setIsVisible(true)
           else setIsVisible(false)     
        }

        window.addEventListener('scroll',toggleVisibility)

        return () => window.removeEventListener ('scroll', toggleVisibility)
    }, [])

    const GoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

  return (
      <div className='fixed bottom-4 right-4 animate-pulse '>
        { isVisible && (
            <button        
            onClick={GoToTop}
            className='w-12 h-12 bg-red-700 flex items-center justify-center rounded-full cursor-pointer focus:outline-none'
            >
                <FaArrowUp />
            </button>
            )
        }
    </div>
  )
}

export default ScrollToTop