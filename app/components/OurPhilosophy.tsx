import React from 'react'
import OurPhilosophyCard from './OurPhilosophyCard'

const OurPhilosophy: React.FC = () => {
  const ourPhilosophy = [
    {
      id: 1,
      title: "Purposeful Connections",
      description: "Our approach is focused on purpose, creativity, impact, and user-centricity. We strive to create meaningful connections with our audience through effective content that resonates with their emotions and desires. "
    },
    {
      id: 2,
      title: "Innovative Solutions",
      description: "We believe in the power of innovation and creativity to drive growth and success. We are constantly exploring new ideas and technologies to create innovative solutions that deliver real value to our clients."
    },
    {
      id: 3,
      title: "Collaborative Partnerships",
      description: "We value collaboration and partnership with our clients, employees, and stakeholders. We believe that working together as a team is the key to achieving success and creating lasting impact."
    }
  ]

  return (
    <div className='flex flex-col gap-y-10'>
      <h1 className='headingStyle text-center'>our philosophy</h1>
      <div className='bg-transparent flex flex-wrap justify-center items-center gap-10 lg:gap-x-36 '>
        {ourPhilosophy.map((item, index) => (
          <OurPhilosophyCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default OurPhilosophy