import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial: React.FC = () => {
  return (
    <>
      <h1 className='headingStyle'>testimonies</h1>
      <div className='bg-transparent grid grid-cols-3 grid-rows-2 gap-4'>
        <div className="p-4"><TestimonialCard /></div>
        <div className="p-4"><TestimonialCard /></div>
        <div className="p-4"><TestimonialCard /></div>
        <div className="p-4"><TestimonialCard /></div>
        <div className="p-4"><TestimonialCard /></div>
        <div className="p-4"><TestimonialCard /></div>
      </div>
    </>
  )
}

export default Testimonial