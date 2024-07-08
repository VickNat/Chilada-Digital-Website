"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import internship from '@/public/images/internships 2.png'
import ContactUsForm from '../components/ContactUsForm'
import logo1 from '@/public/logos/Chilada logo 2 2.svg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import FooterDark from '../components/FooterDark'
import { StyleContext } from '@/lib/StyleContext'

const Page = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div className='bg-white flex flex-col mt-24'>
      <div className={`h-96 w-full bg-${theme.primaryColor} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
          <div className={`absolute inset-0 bg-${theme.primaryColor} opacity-50`}></div>
        </div>
        <div className='relative flex justify-center items-center mt-36'>
          <h1 className='headingStyle'>contact chilada</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-y-32 mb-32'>
        <div className='flex justify-center items-center w-full'>
          <ContactUsForm />
        </div>
        <div className='flex justify-center items-center gap-x-16 w-10/12'>
          <Image src={logo1} alt='Logo' className='w-6/12' />
          <div className={`text-${theme.secondaryColor} w-6/12 flex flex-col justify-center items-start gap-y-10`}>
            <h1 className='font-extrabold text-6xl font-heading'>Let’s discuss, connect with us...</h1>
            <div className='flex justify-start items-center gap-x-4 cursor-pointer hover:text-blue-500'>
              <MdEmail /> <span>chilada@gmail.com</span>
            </div>
            <div className={`flex justify-start items-center gap-x-4 border-2 border-${theme.secondaryColor} rounded-lg bg-${theme.primaryColor} bg-opacity-50 py-3 pr-20 pl-6  cursor-pointer hover:bg-opacity-70`}>
              <AiFillPhone /> <span className='text-white'>+123 456 789</span>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <HiLocationMarker /> <span>123 Street</span>
            </div>
          </div>
        </div>
      </div>
      <FooterDark />
    </div>
  )
}

export default Page