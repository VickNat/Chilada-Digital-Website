'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import internship from '@/public/images/internships 2.png'
import logo1 from '@/public/logos/Chilada logo 1 3.svg'
import ServiceCard from '../components/ServiceCard'
import { StyleContext } from '@/lib/StyleContext'

const Page = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "We provide digital marketing services to help you grow your business.",
      image: logo1
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "We provide social media marketing services to help you grow your business.",
      image: logo1
    },
    {
      id: 3,
      title: "Web Development",
      description: "We provide web development services to help you grow your business.",
      image: logo1
    },
    {
      id: 4,
      title: "SEO",
      description: "We provide SEO services to help you grow your business.",
      image: logo1
    },
    {
      id: 5,
      title: "Content Creation",
      description: "We provide content creation services to help you grow your business.",
      image: logo1
    },
    {
      id: 6,
      title: "Branding",
      description: "We provide branding services to help you grow your business.",
      image: logo1
    },
  ]

  return (
    <div className='bg-white mt-24 pb-24'>
      <div className={`h-96 w-full bg-${theme.primaryColor} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
          <div className={`absolute inset-0 bg-${theme.primaryColor} opacity-50`}></div>
        </div>
        <div className='relative flex justify-center items-center mt-36'>
          <h1 className='headingStyle'>our services</h1>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen my-20">
        <div className="grid grid-cols-3 gap-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* <div className='h-[551px] bg-${theme.primaryColor} my-36 flex flex-col justify-start pt-10 items-center gap-8'>
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
      </div> */}
    </div>
  )
}

export default Page