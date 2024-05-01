"use client"

import { StyleContext } from "@/lib/StyleContext";
import { useContext } from "react";
import Header from "./components/Header";
import ChiladaSlider from "./components/ChiladaSlider";
import OurPhilosophy from "./components/OurPhilosophy";
import WhyChooseUs from "./components/WhyChooseUs";
import FooterWhite from "./components/FooterWhite";
import OurPartners from "./components/OurPartners";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-28 mt-24">
      <ChiladaSlider />
      <OurPhilosophy />
      <WhyChooseUs />
      <OurPartners />
      <Testimonial />
      <FooterWhite />
    </div>
  );
}