'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import kidImage from '@/public/images/Component 53.svg'
import logo1 from '@/public/logos/Chilada logo 2 1.svg'
import { StyleContext } from '@/lib/StyleContext'

const Page = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div className={`bg-${theme.secondaryColor} mt-24`}>
      <div className={`bg-chiladaSliderBg w-full bg-no-repeat bg-cover bg-center`}>
        <div className={`w-full h-full bg-${theme.secondaryColor} bg-opacity-70 flex flex-col gap-y-12 py-10 justify-center items-center`}>
          <h1 className='headingStyle'>About us</h1>
          <p className='text-center text-white w-11/12 md:w-6/12 text-xl'>
            CHILADA DIGITALS is a Social Media and Digital Marketing Agency that helps brands, small businesses, and creatives gain a competitive edge through strategic design solutions. We specialize in connecting clients with their target audiences through tailored strategies, content creation, monitoring online conversations, working with influencers, and reporting on social media performance.
          </p>
          <p className='text-center text-white w-11/12 md:w-6/12 text-xl'>
            CHILADA DIGITALS is a Social Media and Digital Marketing Agency that helps brands, small businesses, and creatives gain a competitive edge through strategic design solutions. We specialize in connecting clients with their target audiences through tailored strategies, content creation, monitoring online conversations, working with influencers, and reporting on social media performance.
          </p>
        </div>
      </div>
      <div className='bg-white '>
        <div className='flex px-8 md:px-20 py-10 max-w-screen-xl mx-auto'>
          <div>
            <h2 className='uppercase font-heading text-black font-extrabold md:text-5xl text-3xl mb-10 text-center md:text-start'>why choose us?</h2>
            <p className=' text-gray-500 w-full md:w-8/12 text-xl text-center md:text-start'>
              Our digital marketing agency specializes in enhancing website visibility through SEO tactics, improving user experience and increasing conversions. With a dedicated team of experts and advanced tools, we offer cost-effective solutions tailored to your business needs that provide valuable information for informed decision-making. Work with us to find customized solutions to increase your online presence and achieve measurable success.
            </p>
          </div>
          <Image src={kidImage} alt="kid" height={512} width={521} />
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto flex  items-center justify-center gap-10 flex-col md:flex-row md:justify-between md:items-center px-8 md:px-20 py-10'>
        <Image src={kidImage} alt="kid" height={512} width={521} />
        <div >
          <h2 className='uppercase font-heading text-white font-extrabold md:text-5xl text-3xl mb-10 text-center md:text-start'>Our mission</h2>
          <p className=' text-gray-100  w-full md:w-10/12 text-xl text-center md:text-start'>
            Our mission is to empower brands to thrive in the digital age by delivering unparalleled expertise and measurable results. we are dedicated to transforming businesses through innovative digital strategies. With a commitment to creativity, integrity, and client success, we partner with you to achieve your digital marketing objectives efficiently and effectively.
          </p>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex mx-auto items-center justify-center gap-10 flex-col-reverse md:flex-row md:justify-between md:items-center px-8 md:px-20 py-32 max-w-screen-xl'>
          <div>
            <h2 className='uppercase font-heading text-black font-extrabold md:text-5xl text-3xl mb-10 text-center md:text-start'>
              Our philosophy
            </h2>
            <p className='text-gray-500 md:w-8/12 text-xl text-center md:text-start'>
              Our focus on purpose, creativity, impact, audience understanding, customized solutions, integrated strategies, data-driven decisions, and trust aims to achieve meaningful and sustainable results for our clients.
            </p>
          </div>
          <Image src={logo1} alt="kid" height={512} width={521} />
        </div>
      </div>
    </div>
  )
}

export default Page