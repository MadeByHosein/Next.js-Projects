import Link from "next/link"

const Navbar = () => {
  return (
    <header className=" h-12 w-full flex items-center bg-gray-900">
       <nav className="flex justify-between items-center w-full px-10 ">
          <Link href='/' className="flex space-x-1">
            <img src="/vercel.svg" alt="logo" width={24} height={24} />
            <p className="hidden md:block">Dev Events</p>
          </Link>

          <ul className="space-x-3">
            <Link href='/'>Home</Link>
            <Link href='/'>Events</Link>
            <Link href='/'>Create Events</Link>
          </ul>
       </nav> 
    </header>
  )
}

export default Navbar