import Image from 'next/image'
import React, { useContext } from 'react'
import { StyleContext } from '@/lib/StyleContext'
import cardImage from '@/public/landingImages/11.jpg'

interface SliderCardProps {
  item: any
}

const ChiladaSliderCard: React.FC<SliderCardProps> = (props) => {
  const { item } = props

  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div className={`shadow-lg md:shadow-xl mb-10 relative bg-${theme.primaryColor} w-full max-w-screen-xl min-h-[500px] text-white overflow-hidden mx-2 rounded-md`}>
      <Image src={theme.landingImage} layout="fill" objectFit="cover" alt="internship" />
    </div>
  )
}

export default ChiladaSliderCard