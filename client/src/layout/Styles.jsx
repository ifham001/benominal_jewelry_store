'use client'

import Image from 'next/image'
import React from 'react'
import img1 from '../../public/styles/1.jpg'
import img2 from '../../public/styles/2.jpg'
import img3 from '../../public/styles/3.jpg'
import img4 from '../../public/styles/4.jpg'
import img5 from '../../public/styles/5.jpg'
import img6 from '../../public/styles/6.jpg'

const JewelryGrid = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8">
      {/* Heading */}
      <p className="md:mt-20 text-center font-light text-2xl md:text-6xl text-[#1d3c2e] mb-8 md:mb-20">
        Style To Carry On...
      </p>

      {/* Grid Layout (4 columns always) */}
      <div className="grid grid-cols-4 gap-2 max-w-7xl mx-auto">
        <Image src={img1} alt="Earring" className="rounded-xl w-full h-32 md:h-72 object-cover" />
        <Image src={img2} alt="Close-up necklace" className="rounded-xl w-full h-32 md:h-72 object-cover" />
        <Image src={img3} alt="Back necklace" className="rounded-xl w-full h-32 md:h-72 object-cover" />
        <Image src={img4} alt="Gold layered w/ rings" className="rounded-xl w-full h-32 md:h-72 object-cover" />

        <div className="col-span-2">
          <Image src={img5} alt="Green top" className="rounded-xl w-full h-40 md:h-96 object-cover" />
        </div>
        <div className="col-span-2">
          <Image src={img6} alt="Blonde layered necklace" className="rounded-xl w-full h-40 md:h-96 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default JewelryGrid
