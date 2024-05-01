import Image from 'next/image'
import React from 'react'
import internship from '@/assets/images/internships 2.png'
import { useInView } from 'react-intersection-observer'

const TestimonialCard:React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 flex flex-col justify-start items-start gap-y-4 rounded-3xl bg-opacity-60 shadow-lg shadow-black transition-all ease-in-out transform duration-2000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <div className='flex justify-start gap-x-4 items-center'>
        <Image src={internship} className='h-20 w-20 rounded-full' alt='image' />
        <h3 className='font-bold font-heading text-3xl'>Headline</h3>
      </div>
      <p className='text-xl font-body font-regular text-left w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quas.</p>
    </div>
  )
}

export default TestimonialCard
