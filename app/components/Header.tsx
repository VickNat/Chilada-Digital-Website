import Image from 'next/image'
import React, { useContext } from 'react'
import logo1 from '@/assets/logos/Chilada logo 1 3.svg'
import logo2 from '@/assets/logos/Chilada logo 2 1.svg'
import Link from 'next/link'
import { StyleContext } from '@/lib/StyleContext'
import { BsFacebook, BsInstagram, BsPhone, BsPinterest } from 'react-icons/bs'


const Header: React.FC = () => {

  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <>
      <nav className={`bg-${theme.secondaryColor} border-gray-200 shadow shadow-black z-20 fixed w-full -mt-24`} >
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-${theme.secondaryColor} md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-${theme.secondaryColor}`}>
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4 text-white bg-blue-300 rounded md:bg-transparent md:text-blue-400 md:p-0`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/ourprojects"
                  className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0`}
                >
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='rounded-l-3xl shadow-lg shadow-black fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-chiladaBlue-200 bg-opacity-70 w-20 h-80 flex flex-col items-center justify-center gap-y-7'>
      <BsFacebook className="text-4xl text-white hover:scale-90 cursor-pointer" />
      <BsInstagram className="text-4xl text-white hover:scale-90 cursor-pointer" />
      <BsPhone className="text-4xl text-white hover:scale-90 cursor-pointer" />
      <BsPinterest className="text-4xl text-white hover:scale-90 cursor-pointer" />
      </div>
    </>

  )
}

export default Header