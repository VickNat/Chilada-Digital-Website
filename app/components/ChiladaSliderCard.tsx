import Image from 'next/image'
import React, { useContext } from 'react'
import logo1 from '@/public/logos/Chilada logo 1 3.svg'
import logo2 from '@/public/logos/Chilada logo 2 1.svg'
import internship from '@/public/images/internships 2.png'
import { StyleContext } from '@/lib/StyleContext'

interface SliderCardProps {
  item: any
}

const ChiladaSliderCard: React.FC<SliderCardProps> = (props) => {
  const { item } = props

  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div className={`shadow-lg md:shadow-2xl mb-10 shadow-black relative bg-${theme.primaryColor} rounded-xl md:rounded-3xl w-96 md:w-[1056px]  text-white overflow-hidden`}>

      <div className="absolute inset-0">
        <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
        <div className={`absolute inset-0 bg-${theme.primaryColor} opacity-40`}></div>
      </div>

      <div className='relative pt-16 pb-40 px-10 md:py-28 md:px-24 flex flex-col md:flex-row md:justify-between md:items-center gap-y-10 gap-x-10'>
        <h1 className='headingStyle'>{item.phrase}</h1>

        <Image src={logo1} alt='Logo' className='w-72 h-56' />
      </div>

    </div>

  )
}

export default ChiladaSliderCard