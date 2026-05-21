'use client'

import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic';
import {ReactNode} from 'react'


const Provider = ({children}: {children: ReactNode }) => {
  return (
    <ThemeProvider
     attribute= "class" 
     enableSystem
     defaultTheme='system'
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider