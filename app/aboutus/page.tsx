import Image from 'next/image'
import React from 'react'
import kidImage from '@/assets/images/Component 53.svg'
import logo1 from '@/assets/logos/Chilada logo 1 3.svg'

const page = () => {
  return (
    <div className='bg-chiladaBlue-100 mt-24'>
      <div className={`bg-chiladaSliderBg w-full bg-no-repeat bg-cover bg-center`}>
        <div className='w-full h-full bg-chiladaBlue-100 bg-opacity-70 flex flex-col gap-y-12 py-10 justify-center items-center'>
          <h1 className='headingStyle'>About us</h1>
          <p className='text-center text-white w-6/12 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eaque fugiat. Officiis rerum libero beatae voluptatibus a error tempora, maiores itaque ut nemo deleniti nihil facere magni, officia eius ipsa mollitia id, earum dicta molestiae sapiente voluptatem veniam alias assumenda? Impedit labore sequi repellendus tenetur placeat repellat deleniti eveniet quaerat?
          </p>
          <p className='text-center text-white w-6/12 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eaque fugiat. Officiis rerum libero beatae voluptatibus a error tempora, maiores itaque ut nemo deleniti nihil facere magni, officia eius ipsa mollitia id, earum dicta molestiae sapiente voluptatem veniam alias assumenda? Impedit labore sequi repellendus tenetur placeat repellat deleniti eveniet quaerat?
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center px-20 py-10'>
        <div>
          <h2 className='uppercase font-heading text-white font-extrabold md:text-5xl text-3xl mb-10'>why choose us?</h2>
          <p className='text-left text-white w-8/12 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi quia aut suscipit omnis facilis atque voluptatibus. Aperiam sint aspernatur iste perferendis libero eveniet saepe necessitatibus, totam optio in voluptatibus cumque. Similique voluptates tempora dolores, beatae natus sunt atque rerum, eligendi exercitationem sit explicabo, earum id soluta qui minima error.
          </p>
        </div>
        <Image src={kidImage} alt="kid" height={512} width={521} />
      </div>
      <div className='bg-white flex justify-between items-center px-20 py-10'>
        <Image src={kidImage} alt="kid" height={512} width={521} />
        <div className='ml-16'>
          <h2 className='uppercase font-heading text-black font-extrabold md:text-5xl text-3xl mb-10'>Our mission</h2>
          <p className='text-left text-gray-500 w-10/12 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi quia aut suscipit omnis facilis atque voluptatibus. Aperiam sint aspernatur iste perferendis libero eveniet saepe necessitatibus, totam optio in voluptatibus cumque. Similique voluptates tempora dolores, beatae natus sunt atque rerum, eligendi exercitationem sit explicabo, earum id soluta qui minima error.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center px-20 py-10 mb-10'>
        <div>
          <h2 className='uppercase font-heading text-white font-extrabold md:text-5xl text-3xl mb-10'>why choose us?</h2>
          <p className='text-left text-white w-8/12 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi quia aut suscipit omnis facilis atque voluptatibus. Aperiam sint aspernatur iste perferendis libero eveniet saepe necessitatibus, totam optio in voluptatibus cumque. Similique voluptates tempora dolores, beatae natus sunt atque rerum, eligendi exercitationem sit explicabo, earum id soluta qui minima error.
          </p>
        </div>
        <Image src={logo1} alt="kid" height={512} width={521} />
      </div>
    </div>
  )
}

export default page