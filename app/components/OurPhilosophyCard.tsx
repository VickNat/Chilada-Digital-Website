import React from 'react'
import { useInView } from 'react-intersection-observer'

const OurPhilosophyCard: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div 
      ref={ref}
      className={`bg-white md:w-72 md:h-80 bg-opacity-50 md:rounded-3xl relative mb-20 overflow-hidden shadow-lg shadow-black cursor-pointer hover:shadow-2xl hover:shadow-black transition-2000 transition-all ease-in-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <p className='text-center font-normal text-xl py-8 px-11'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, ut! Ipsum repudiandae in aut odit assumenda at! Necessitatibus, distinctio rem.</p>
      <div className='h-16 py-1 flex justify-center items-center absolute bottom-0 w-full bg-white object-cover'>
        <h2 className='uppercase text-3xl text-red-800 font-bold'>Chilada</h2>
      </div>
    </div>
  )
}

export default OurPhilosophyCard
