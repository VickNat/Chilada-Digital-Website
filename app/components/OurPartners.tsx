import React from 'react'
import OurPartnersCarousel from './OurPartnersCarousel'

const OurPartners: React.FC = () => {
  return (
    <>
      <h1 className='headingStyle'>our partners</h1>
      <div className='bg-white bg-opacity-80 w-full flex flex-col gap-y-10 py-10 overflow-x-hidden'>
        <OurPartnersCarousel />
      </div>
    </>
  )
}

export default OurPartners