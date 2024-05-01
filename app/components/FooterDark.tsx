import { StyleContext } from '@/lib/StyleContext'
import React, { useContext } from 'react'
import { BsFacebook } from 'react-icons/bs'

const FooterDark: React.FC = () => {

  return (
    <div className='bg-chiladaBlue-200 w-full h-[570px] rounded-t-3xl px-8'>
      <div className='flex flex-col gap-y-9 py-10 justify-center items-center'>
        <h3 className={`uppercase font-semibold tracking-widest text-gray-300`}>feel free to partner with us</h3>
        <h1 className='capitalize text-5xl font-bold font-heading text-white'>request more information</h1>
        <button
          // type="button"
          className="bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md shadow-black font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 cursor-pointer hover:from-gray-300 hover:to-white text-chiladaBlue-200"
        >
          Contact Us
        </button>
      </div>

      <div className='flex flex-col justify-center items-center pb-9'>
        <p className='text-gray-200'>@copyright</p>
      </div>

      <hr className='text-gray-500' />

      <div className='flex flex-col gap-y-9 pt-9'>
        <div className='flex gap-x-8 justify-end items-start'>
          <BsFacebook className="text-4xl text-white" />
          <BsFacebook className="text-4xl text-white" />
          <BsFacebook className="text-4xl text-white" />
          <BsFacebook className="text-4xl text-white" />
        </div>
        <div className='flex justify-center items-center gap-x-12 text-gray-100'>
          <a href=''>Home</a>
          <a href=''>Home</a>
          <a href=''>Home</a>
          <a href=''>Home</a>
        </div>
      </div>
    </div>
  )
}

export default FooterDark