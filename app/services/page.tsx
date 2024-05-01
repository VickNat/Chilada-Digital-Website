import React from 'react'
import Image from 'next/image'
import internship from '@/assets/images/internships 2.png'
import logo1 from '@/assets/logos/Chilada logo 1 3.svg'
import ServiceCard from '../components/ServiceCard'

const page = () => {
  return (
    <div className='bg-white mt-24 pb-24'>
      <div className='h-96 w-full bg-chiladaBlue-100 relative overflow-hidden'>
        <div className="absolute inset-0">
          <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
          <div className={`absolute inset-0 bg-chiladaBlue-100 opacity-50`}></div>
        </div>
        <div className='relative flex justify-center items-center mt-36'>
          <h1 className='headingStyle'>our services</h1>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen my-20">
        <div className="grid grid-cols-3 gap-16">
          <div className="card flex justify-center items-center"><ServiceCard /></div>
          <div className="card flex justify-center items-center"><ServiceCard /></div>
          <div className="card flex justify-center items-center"><ServiceCard /></div>
          <div className="card flex justify-center items-center"><ServiceCard /></div>
          <div className="card flex justify-center items-center"><ServiceCard /></div>
          <div className="card flex justify-center items-center"><ServiceCard /></div>
        </div>
      </div>

      <div className='h-[551px] bg-chiladaBlue-100 my-36 flex flex-col justify-start pt-10 items-center gap-8'>
        <h1 className='headingStyle'>Want to get started?</h1>
        <div className='flex justify-center items-center gap-x-10'>

          <Image src={logo1} alt='Logo' className='' width={280} height={280} />

          <div>
            <h3 className='headingStyle text-3xl flex flex-col justify-center items-center'>Get in touch</h3>
            <button
              // type="button"
              className="bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md shadow-black font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 cursor-pointer hover:from-gray-300 hover:to-white text-chiladaBlue-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page