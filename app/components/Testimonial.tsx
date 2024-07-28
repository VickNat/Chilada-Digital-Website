import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial: React.FC = () => {
  return (
    <>
      <h1 className='headingStyle'>testimonies</h1>
      <div className='bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl'>
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