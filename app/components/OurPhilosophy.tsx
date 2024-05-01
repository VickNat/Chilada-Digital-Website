import React from 'react'
import OurPhilosophyCard from './OurPhilosophyCard'

const OurPhilosophy: React.FC = () => {
  return (
    <>
      <h1 className='headingStyle'>our philosophy</h1>
      <div className='bg-transparent flex justify-center items-center gap-x-36 '>
        <OurPhilosophyCard />
        <OurPhilosophyCard />
        <OurPhilosophyCard />
      </div>
    </>
  )
}

export default OurPhilosophy