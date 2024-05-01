import React from 'react'
import { StyleContext } from "@/lib/StyleContext";
import { useContext, useEffect, useRef, useState } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ChiladaSliderCard from "./ChiladaSliderCard";
import Image from 'next/image'
import internship from '@/assets/images/internships 2.png'

const ChiladaSlider: React.FC = () => {
  const swiperRef = useRef<any>();

  const { theme, themeIndex, setThemeIndex } = useContext(StyleContext)

  const chiladaTexts = [
    "",
    ""
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
              {chiladaTexts.map((text, index) => (
                <div key={index} className="swiper-slide">
                  <div className="flex justify-center items-center">
                    <ChiladaSliderCard />
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