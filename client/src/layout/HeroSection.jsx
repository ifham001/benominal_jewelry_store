'use client'

import React from 'react'
import Image from 'next/image'

import hero2 from '../../public/hero/hero-banner2.png'

function HeroSection() {
  return (
    <div className="w-full px-2 md:px-8 overflow-hidden">
      <div className="relative flex items-center justify-center">
        <div className="relative w-full aspect-square md:aspect-auto md:h-[calc(100vh-80px)] rounded-2xl overflow-hidden">
          <Image
            fill
            src={hero2}
            alt="Hero"
            quality={100}
            className="object-cover brightness-65 transition-all duration-700 ease-in-out"
            
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="text-white font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center leading-tight">
              Discover <br />
              Jewelry That <br />
              Stays Beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
