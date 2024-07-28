"use client"
import type { Metadata } from 'next'
import './globals.css'
import { useEffect, useState } from 'react'
import { StyleContext } from '@/lib/StyleContext'
import Image from 'next/image'
import internship from '@/public/images/internships 2.png'
import Header from './components/Header'
import logo from '@/public/logos/Chilada logo 1 3.svg'
import logo2 from '@/public/logos/Chilada logo 2 1.svg'
import logo3 from '@/public/logos/Chilada logo 2 2.svg'
import { Theme } from '@/lib/types'
import BackToTopButton from './components/BackToTopButton'


// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [themeIndex, setThemeIndex] = useState(0)

  const themes: Theme[] = [
    {
      id: 1,
      primaryColor: "chiladaBlue-100",
      secondaryColor: "chiladaBlue-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 2,
      primaryColor: "chiladaPurple-100",
      secondaryColor: "chiladaPurple-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 3,
      primaryColor: "chiladaRed-100",
      secondaryColor: "chiladaRed-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 4,
      primaryColor: "chiladaGreen-100",
      secondaryColor: "chiladaGreen-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 5,
      primaryColor: "chiladaBrown-100",
      secondaryColor: "chiladaBrown-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 6,
      primaryColor: "chiladaYellow-100",
      secondaryColor: "chiladaYellow-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
    {
      id: 7,
      primaryColor: "chiladaOrange-100",
      secondaryColor: "chiladaOrange-200",
      sliderImage: "",
      primaryLogo: logo,
      secondaryLogo: logo3,
    },
  ];

  // console.log(themes[themeIndex], themeIndex);
  // console.log(`bg-${themes[themeIndex].primaryColor}`)

  return (
    <StyleContext.Provider value={{ theme: themes[themeIndex], themeIndex, setThemeIndex }} >
      <html lang="en">
        <body className={`bg-${themes[themeIndex].primaryColor}`}>
          <div className={`bg-${themes[themeIndex].primaryColor} relative transition-bg duration-10000`} >
            <div className="absolute inset-0">
              <Image src={internship} alt='Internship' className='h-full w-full object-cover mix-blend-overlay' />
              <div className={`absolute inset-0 bg-${themes[themeIndex].primaryColor} opacity-90  transition-bg duration-10000`}></div>
            </div>
            <div className='relative'>
              <Header />
              {children}
              <BackToTopButton />
            </div>
          </div>
        </body>
      </html>
    </StyleContext.Provider>
  )
}
