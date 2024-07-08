'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import kidImage from '@/public/images/Component 53.svg'
import logo1 from '@/public/logos/Chilada logo 1 3.svg'
import { StyleContext } from '@/lib/StyleContext'

const Page = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div className={`bg-${theme.secondaryColor} mt-24`}>
      <div className={`bg-chiladaSliderBg w-full bg-no-repeat bg-cover bg-center`}>
        <div className={`w-full h-full bg-${theme.secondaryColor} bg-opacity-70 flex flex-col gap-y-12 py-10 justify-center items-center`}>
          <h1 className='headingStyle'>About us</h1>
          <p className='text-center text-white w-6/12 text-xl'>
            CHILADA DIGITALS is a Social Media and Digital Marketing Agency that helps brands, small businesses, and creatives gain a competitive edge through strategic design solutions. We specialize in connecting clients with their target audiences through tailored strategies, content creation, monitoring online conversations, working with influencers, and reporting on social media performance.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center px-20 py-10'>
        <div>
          <h2 className='uppercase font-heading text-white font-extrabold md:text-5xl text-3xl mb-10'>why choose us?</h2>
          <p className='text-left text-white w-8/12 text-xl'>
            Our digital marketing agency specializes in enhancing website visibility through SEO tactics, improving user experience and increasing conversions. With a dedicated team of experts and advanced tools, we offer cost-effective solutions tailored to your business needs that provide valuable information for informed decision-making. Work with us to find customized solutions to increase your online presence and achieve measurable success.
          </p>
        </div>
        <Image src={kidImage} alt="kid" height={512} width={521} />
      </div>
      <div className='bg-white flex justify-between items-center px-20 py-10'>
        <Image src={kidImage} alt="kid" height={512} width={521} />
        <div className='ml-16'>
          <h2 className='uppercase font-heading text-black font-extrabold md:text-5xl text-3xl mb-10'>Our mission</h2>
          <p className='text-left text-gray-500 w-10/12 text-xl'>
            Our mission is to empower brands to thrive in the digital age by delivering unparalleled expertise and measurable results. we are dedicated to transforming businesses through innovative digital strategies. With a commitment to creativity, integrity, and client success, we partner with you to achieve your digital marketing objectives efficiently and effectively.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center px-20 py-10 mb-10'>
        <div>
          <h2 className='uppercase font-heading text-white font-extrabold md:text-5xl text-3xl mb-10'>
            Our philosophy
          </h2>
          <p className='text-left text-white w-8/12 text-xl'>
            Our focus on purpose, creativity, impact, audience understanding, customized solutions, integrated strategies, data-driven decisions, and trust aims to achieve meaningful and sustainable results for our clients.
          </p>
        </div>
        <Image src={logo1} alt="kid" height={512} width={521} />
      </div>
    </div>
  )
}

export default Page