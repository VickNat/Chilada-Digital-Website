import React, { useContext } from 'react'
import Image from 'next/image'
import internship from '@/public/images/internships 2.png'
import { StyleContext } from '@/lib/StyleContext'

const WhyChooseUs: React.FC = () => {
  const { color, colorIndex, setColorIndex }: any = useContext(StyleContext)

  return (
    <div className={`bg-chiladaSliderBg w-full bg-no-repeat bg-cover bg-center`}>
      <div className='w-full h-full bg-gray-900 bg-opacity-50 flex flex-col gap-y-12 py-10 justify-center items-center'>
        <h1 className='headingStyle'>why choose us?</h1>
        <p className='text-center text-white w-6/12 text-xl'>
          Our digital marketing agency specializes in enhancing website visibility through SEO tactics, improving user experience and increasing conversions. With a dedicated team of experts and advanced tools, we offer cost-effective solutions tailored to your business needs that provide valuable information for informed decision-making. Work with us to find customized solutions to increase your online presence and achieve measurable success.
        </p>
        <p className='text-center text-white w-6/12 text-xl'>
          Beyond SEO, we provide comprehensive digital marketing services including social media management, content marketing, and PPC advertising. Our holistic approach ensures that every aspect of your online strategy is optimized for maximum impact. By leveraging the latest industry trends and data analytics, we help you stay ahead of the competition and continuously adapt to the ever-changing digital landscape. Partner with us to unlock the full potential of your brand and achieve your business goals.
        </p>
      </div>
    </div>

  )
}

export default WhyChooseUs