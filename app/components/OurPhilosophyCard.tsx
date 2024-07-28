import { StyleContext } from '@/lib/StyleContext';
import React, { useContext } from 'react'
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
  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  return (
    <div
      ref={ref}
      className={`relative w-80 h-80 rounded-xl overflow-hidden shadow-lg transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-300 ease-in-out`}
      style={{ borderColor: theme.secondaryColor, borderWidth: '2px', borderStyle: 'solid' }}
    >
      <div
        className='absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between'
        style={{ borderColor: theme.secondaryColor }}
      >
        <p className='text-center font-light text-lg text-gray-800'>{item.description}</p>
        <div className='mt-4'>
          <h2 className='uppercase text-2xl text-center text-gray-900 font-semibold tracking-wide'>{item.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default OurPhilosophyCard
