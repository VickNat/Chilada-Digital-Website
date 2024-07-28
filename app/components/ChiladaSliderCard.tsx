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
    <div className={`shadow-lg md:shadow-xl mb-10 relative bg-${theme.primaryColor} rounded-xl md:rounded-3xl w-full max-w-screen-xl min-h-[500px] text-white overflow-hidden mx-2`}>

      <div className="absolute inset-0">
        <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
        <div className={`absolute inset-0 bg-${theme.primaryColor} opacity-40`}></div>
      </div>

      <div className='relative min-h-[500px] flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center mx-auto max-w-screen-lg gap-y-10'>
        <h1 className='headingStyle text-center'>{item.phrase}</h1>

        <Image src={logo1} alt='Logo' className='w-72 h-56' />
      </div>

    </div>

  )
}

export default ChiladaSliderCard