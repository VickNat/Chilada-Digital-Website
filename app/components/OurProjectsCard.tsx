import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  companyName: string
  companyLogo: StaticImageData
}

const OurProjectsCard: React.FC<Props> = ({ companyName, companyLogo }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <div>
      <div className='flex justify-start items-center gap-x-8 mb-8'>
        <div className='overflow-hidden h-32 w-32 rounded-full  ml-20'>
          <Image src={companyLogo} alt={companyName} className='object-cover h-full w-full' />
        </div>
        <h3 className='text-6xl font-medium capitalize'>{companyName}</h3>
      </div>
      <div className='overflow-hidden'>
        <div className='w-auto flex gap-x-7 animate-infinite-scroll cursor-grab hover:animate-pause'>
          {items.map((item) => (
            <div className="w-96 h-80 bg-red-500 text-2xl flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl">
              <div className='w-96 h-80 object-cover bg-red-500 overflow-hidden rounded-2xl hover:scale-95 transform transition-transform duration-300'>
                <Image src={companyLogo} alt='Name' className='object-cover' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default OurProjectsCard