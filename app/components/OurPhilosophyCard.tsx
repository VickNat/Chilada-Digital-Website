import React from 'react'
import { useInView } from 'react-intersection-observer'

interface OurPhilosophyCardProps {
  item: any;
}

const OurPhilosophyCard: React.FC<OurPhilosophyCardProps> = (props) => {
  const { item } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`bg-white md:w-80 md:h-80 bg-opacity-50 md:rounded-3xl relative mb-20 overflow-hidden shadow-lg shadow-black cursor-pointer hover:shadow-2xl hover:shadow-black transition-200 transition-all ease-in-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <p className='text-center font-normal text-xl py-4 px-6'>{item.description}</p>
      <div className='px-2 h-16 flex justify-center items-center absolute bottom-0 w-full bg-white object-cover'>
        <h2 className='uppercase text-xl text-center text-red-800 font-bold'>{item.title}</h2>
      </div>
    </div>
  )
}

export default OurPhilosophyCard
