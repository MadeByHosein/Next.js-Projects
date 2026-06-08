'use client'
import Link from 'next/link'
import {NavLinks} from './NavLinks'
import { usePathname } from 'next/navigation'
import Container from '../Container'


function Navbar() {
  const pathname = usePathname()
  return <>
    <nav className='shadow p-4'>
      <Container>
        {NavLinks.map((item, index)=> (
          <Link 
            key={index}
            href={item.href} 
            className={`mr-4 ${pathname === item.href && 'text-blue-400'}`} >
              {item.title}
          </Link> 
          )
        )}
      </Container>
    </nav>
  </>
}

export default Navbar