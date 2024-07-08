"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import internship from '@/public/images/internships 2.png'
import { motion } from 'framer-motion'
import { StyleContext } from '@/lib/StyleContext'

interface ServiceCardProps {
  service: any
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { service } = props
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <motion.div
      initial={{ opacity: 0, y: '10vh' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={`cursor-pointer  shadow-2xl hover:shadow-2xl hover:shadow-black bg-${theme.primaryColor} bg-opacity-90 w-[304px] rounded-lg overflow-hidden`}
    >
      <div className='bg-gray-700 w-full h-48 object-cover overflow-hidden'>
        <Image className='object-cover' src={internship} alt='Image' />
      </div>
      <div className='text-white pr-3 pl-5 flex flex-col justify-center items-start gap-y-5 pt-5 pb-10'>
        <h1 className='text-3xl font-others font-bold capitalize'>{service.title}</h1>
        <p className='text-2xl font-others font-normal text-gray-100'>{service.description}</p>
      </div>
    </motion.div>
  )
}


export default ServiceCard