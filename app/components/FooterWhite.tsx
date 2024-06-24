import { StyleContext } from '@/lib/StyleContext'
import React, { useContext } from 'react'
import { BsFacebook } from 'react-icons/bs'

const FooterWhite: React.FC = () => {
  const { color, colorIndex, setColorIndex } : any = useContext(StyleContext)

  return (
    <div className='bg-white w-full h-[570px] rounded-t-3xl px-8'>
      <div className='flex flex-col gap-y-9 py-10 justify-center items-center'>
        <h3 className={`uppercase font-semibold tracking-widest text-chiladaBlue-200`}>feel free to partner with us</h3>
        <h1 className='capitalize text-5xl font-bold font-heading'>request more information</h1>
        <button
          // type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 cursor-pointer hover:from-blue-700 hover:to-blue-500"
        >
          Contact Us
        </button>
      </div>

      <div className='flex flex-col justify-center items-center pb-9'>
        <p className='text-gray-600'>@copyright</p>
      </div>

      <hr className='text-gray-500' />

      <div className='flex flex-col gap-y-9 pt-9'>
        <div className='flex gap-x-8 justify-end items-start'>
          <BsFacebook className="text-4xl text-chiladaBlue-200" />
          <BsFacebook className="text-4xl text-chiladaBlue-200" />
          <BsFacebook className="text-4xl text-chiladaBlue-200" />
          <BsFacebook className="text-4xl text-chiladaBlue-200" />
        </div>
        <div className='flex justify-center items-center gap-x-12'>
          <a href=''>Home</a>
          <a href=''>Home</a>
          <a href=''>Home</a>
          <a href=''>Home</a>
        </div>
      </div>
    </div>
  )
}

export default FooterWhite