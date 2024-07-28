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

      <div className="flex justify-center items-center my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page