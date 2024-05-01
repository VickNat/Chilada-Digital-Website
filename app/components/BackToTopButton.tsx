import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const BackToTopButton: React.FC = () => {

  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const onScrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        backToTop && (
          <button onClick={onScrollClick} className='fixed right-4 bottom-4 '>
            <FaArrowCircleUp className='w-12 bg-chiladaBlue-200 bg-opacity-70 text-white h-auto rounded-full font-extrabold' />
          </button>
        )
      }
    </>
  )
}

export default BackToTopButton