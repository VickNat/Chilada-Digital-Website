import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

export interface Partner {
  id: number
  image: StaticImageData
  projects: string
}

export interface Theme {
  id: number
  primaryColor: string
  secondaryColor: string
  sliderImage: string
  primaryLogo: any
  secondaryLogo: any
}

export interface ColorContextStyle {
  theme: Theme
  themeIndex: number
  setThemeIndex: Dispatch<SetStateAction<number>>
}