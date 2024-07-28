import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import logo1 from '@/public/logos/Chilada logo 1 3.svg'
import Link from 'next/link'
import { StyleContext } from '@/lib/StyleContext'
import { BsFacebook, BsInstagram, BsPhone, BsPinterest } from 'react-icons/bs'
import { useRouter, usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const { theme } = useContext(StyleContext)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    handleResize() // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize) // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize) // Clean up the event listener on component unmount
    }
  }, [])

  const isActive = (path: string) => pathname === path

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <nav className={`bg-${theme.secondaryColor} border-gray-200 z-20 fixed w-full -mt-24 bg-opacity-50 backdrop-blur-md`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo1}
              className="h-16 w-20 mr-3"
              alt="Chilada Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-blue-300 rounded-lg md:hidden hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4 ${isActive('/') ? `text-blue-300` : 'text-white'} hover:text-blue-300 md:p-0`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className={`block py-2 pl-3 pr-4 ${isActive('/aboutus') ? `text-blue-300` : 'text-white'} hover:text-blue-300 md:p-0`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 pl-3 pr-4 ${isActive('/services') ? `text-blue-300` : 'text-white'} hover:text-blue-300 md:p-0`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className={`block py-2 pl-3 pr-4 ${isActive('/contactus') ? `text-blue-300` : 'text-white'} hover:text-blue-300 md:p-0`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/ourprojects"
                  className={`block py-2 pl-3 pr-4 ${isActive('/ourprojects') ? `text-blue-300` : 'text-white'} hover:text-blue-300 md:p-0`}
                >
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {!isSmallScreen && (
        <div className={`rounded-r-3xl shadow shadow-black fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-${theme.secondaryColor} bg-opacity-40 w-14 h-72 flex flex-col items-center justify-center gap-y-5 backdrop-blur-md`}>
          <BsFacebook className="text-4xl text-white hover:scale-90 cursor-pointer" />
          <BsInstagram className="text-4xl text-white hover:scale-90 cursor-pointer" />
          <BsPhone className="text-4xl text-white hover:scale-90 cursor-pointer" />
          <BsPinterest className="text-4xl text-white hover:scale-90 cursor-pointer" />
        </div>
      )}
      {isSmallScreen && (
        <div className={`fixed bottom-4 left-4 bg-${theme.secondaryColor} rounded-full p-2`}>
          <BsPhone className="text-white text-3xl" />
        </div>
      )}
    </>
  )
}

export default Header
