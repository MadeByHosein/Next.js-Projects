'use client' ;

import {useTheme} from 'next-themes'
import { useState , useEffect } from "react";
import { BiSun , BiMoon} from 'react-icons/bi';


const ThemeToggler = () => {
    const [mounted , setMounted] = useState(false) ;
    const {theme , setTheme , systemTheme} = useTheme() ;

    // در Next.js، ابتدا رندر سمت سرور انجام می‌شود. در آن لحظه next-themes هنوز نمی‌داند کاربر چه تمی دارد (Theme ممکن است undefined باشد). اگر کامپوننت بدون این کنترل رندر شود، باعث Hydration Mismatch (عدم تطابق بین HTML سرور و کلاینت) می‌شود.

    // این کار از مشکلات زیر جلوگیری می‌کند:
    // نمایش آیکون اشتباه در لحظه اول
    // خطاهای Hydration Mismatch
    // flickering (چشمک زدن) تم

    useEffect(()=> {
        setMounted(true)
    }, []) ;
    if (!mounted) return null ;

    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <button onClick={()=> setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className=' p-2 transition w-10 h-10 cursor-pointer bg-white rounded-full flex flex-col  items-center justify-center'>
        {currentTheme === 'dark' 
        ? (
            <BiSun className='text-black w-7 h-7 cursor-pointer' />
        ) : (
            <BiMoon className='text-black w-7 h-7  cursor-pointer' />    
        )}
    </button>
  )
}

export default ThemeToggler