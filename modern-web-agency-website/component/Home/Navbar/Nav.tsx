'use client'
import Logo from '@/component/Helper/Logo'
import ThemeToggler from '@/component/Helper/themToggeler'
import { NAVLINKS } from '@/constants/constant'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {HiBars3BottomRight} from 'react-icons/hi2'

const Nav = () => {
  const [navBg, setNavBg] = useState(false)

  useEffect (()=> {
    const handler = () => {
      return setNavBg(window.scrollY >= 90 )
    }
    window.addEventListener('scroll' , handler) ;

    return ()=> window.removeEventListener('scroll' , handler) ;
    
  },[])


  return (
    <div className={`transition-all duration-200 h-[12vh] z-100 w-full fixed ${navBg ? 'dark:bg-gray-900  bg-blue-950 shadow-md':'transparent'}`} >
        <div className='flex items-center h-full justify-between w-[90%] xl:[w-80%] mx-auto '>
            {/* Logo */}
            <Logo />
            {/* Navbar Links */}
            <div className="hidden lg:flex items-center space-x-5 ">
                {NAVLINKS.map((links)=> (
                    <Link
                      key={links.id}   
                      href={links.url}
                      className='text-white text-sm hover:text-yellow-200 font-semibold transition-colors duration-200'  
                    >
                        {links.label}
                    </Link>
                ))}
            </div>
            {/* Buttons */}
            <div className="flex items-center space-x-4">
                {/* Create Accont Button */}
                <Link 
                  href= '#_'
                  className='box-border relative z-20 inline-flex items-center justify-center w-auto px-7 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none '
                  >               
                    <span className='relativ z-20 items-center text-sm '>
                        Create Account
                    </span>
                </Link>
                {/* ThemeToggler */}
                <ThemeToggler />
                {/* Burger Menu */}
                <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
            
        </div>
    </div>
  )
}

export default Nav