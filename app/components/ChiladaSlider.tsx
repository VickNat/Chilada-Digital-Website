import React from 'react'
import { StyleContext } from "@/lib/StyleContext";
import { useContext, useEffect, useRef, useState } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ChiladaSliderCard from "./ChiladaSliderCard";
import image1 from '@/public/images/1.svg'
import image2 from '@/public/images/2.svg'
import image3 from '@/public/images/3.svg'
import image4 from '@/public/images/4.svg'
import image5 from '@/public/images/5.svg'
import logo1 from '@/public/logos/Chilada logo 1 3.svg'

const ChiladaSlider: React.FC = () => {
  const swiperRef = useRef<any>();

  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  const chiladaTexts = [
    {
      id: 1,
      phrase: "Innovative Marketing Solutions",
      image: image1
    },
    {
      id: 2,
      phrase: "Results-Driven Digital Marketing",
      image: image2
    },
    {
      id: 3,
      phrase: "Your Success, Our Mission",
      image: image3
    },
    {
      id: 4,
      phrase: "Driving Engagement and Growth",
      image: image4
    },
    {
      id: 5,
      phrase: "Creativity Meets Strategy",
      image: image5
    },
    {
      id: 6,
      phrase: "Transforming Ideas into Reality",
      image: image3
    },
    {
      id: 7,
      phrase: "Chilada Digitals",
      image: logo1
    }
  ];

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper', {
      centeredSlides: true,
      loop: true,

      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },

      on: {
        slideChange: function () {
          setThemeIndex(swiperRef.current?.realIndex ? swiperRef.current?.realIndex : 0)
        },
      },
    });
  }, []);

  return (
    <>
      <div className={`w-full h-full bg-transparent`}>
        <div className="swiper">
          <div className="swiper-wrapper pt-10">
            {chiladaTexts.map((item, index) => (
              <div key={index} className="swiper-slide">
                <div className="flex justify-center items-center">
                  <ChiladaSliderCard item={item} />
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </>
  )
}

export default ChiladaSlider