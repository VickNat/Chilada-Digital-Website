import React, { useContext } from 'react'
import Image from 'next/image'
import internship from '@/assets/images/internships 2.png'
import { StyleContext } from '@/lib/StyleContext'

const WhyChooseUs: React.FC = () => {
  const { color, colorIndex, setColorIndex } = useContext(StyleContext)

  return (
  <div className={`bg-chiladaSliderBg w-full bg-no-repeat bg-cover bg-center`}>
      <div className='w-full h-full bg-slate-600 bg-opacity-50 flex flex-col gap-y-12 py-10 justify-center items-center'>
        <h1 className='headingStyle'>why choose us?</h1>
        <p className='text-center text-white w-6/12 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eaque fugiat. Officiis rerum libero beatae voluptatibus a error tempora, maiores itaque ut nemo deleniti nihil facere magni, officia eius ipsa mollitia id, earum dicta molestiae sapiente voluptatem veniam alias assumenda? Impedit labore sequi repellendus tenetur placeat repellat deleniti eveniet quaerat?
        </p>
        <p className='text-center text-white w-6/12 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eaque fugiat. Officiis rerum libero beatae voluptatibus a error tempora, maiores itaque ut nemo deleniti nihil facere magni, officia eius ipsa mollitia id, earum dicta molestiae sapiente voluptatem veniam alias assumenda? Impedit labore sequi repellendus tenetur placeat repellat deleniti eveniet quaerat?
        </p>
      </div>
  </div>
  
  )
}

export default WhyChooseUs