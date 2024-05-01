import { Partner } from '@/lib/types';
import React from 'react'
import internship from '@/assets/images/internships 2.png'
import Image from 'next/image';

const OurPartnersCarousel: React.FC = () => {
  const items: Partner[] = [
    {
      id: 1,
      image: internship,
      projects: ""
    },
    {
      id: 2,
      image: internship,
      projects: ""
    },
    {
      id: 3,
      image: internship,
      projects: ""
    },
    {
      id: 4,
      image: internship,
      projects: ""
    },
    {
      id: 5,
      image: internship,
      projects: ""
    },
    {
      id: 6,
      image: internship,
      projects: ""
    },
    {
      id: 7,
      image: internship,
      projects: ""
    },
    {
      id: 8,
      image: internship,
      projects: ""
    },
    {
      id: 9,
      image: internship,
      projects: ""
    },
    {
      id: 10,
      image: internship,
      projects: ""
    },
  ];

  return (
    <>
      <ul className='flex gap-x-16 animate-infinite-scroll cursor-grab hover:animate-pause scroll-smooth transition-all ease-linear'>
        {items.map((val) => <li key={val.id}>
          <div className='transform transition-all duration-300 hover:scale-95 bg-gray-400 h-40 w-40 rounded-full overflow-hidden shadow-lg shadow-blue-500'>
            <Image src={val.image} alt='image' className='object-cover w-full h-full cursor-pointer  ' />
          </div>
        </li>)}
      </ul>
      <ul className='flex gap-x-16 animate-infinite-scroll cursor-grab hover:animate-pause scroll-smooth transition-all ease-linear'>
        {items.map((val) => <li key={val.id}>
          <div className='transform transition-all duration-300 hover:scale-95 bg-gray-400 h-40 w-40 rounded-full overflow-hidden shadow-lg shadow-blue-500'>
            <Image src={val.image} alt='image' className='object-cover w-full h-full cursor-pointer  ' />
          </div>
        </li>)}
      </ul>
    </>
  )
}

export default OurPartnersCarousel