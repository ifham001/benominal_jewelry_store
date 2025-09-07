'use client'


import CollectionDisplay from '@/ui/collection/CollectionDisplay'
import React from 'react'




function CollectionPage() {
  

  return (
    <div className="px-2 md:px-12 py-8 ">
      {/* Top Text */}
      <div className=" font-light flex flex-col mt-8 md:mt-15 items-center justify-center text-center mb-6">
        <p className="text-xl md:text-4xl tracking-wider text-[#83918B]">
          <span>Korean Design. </span>
          <span className="text-black">Anti-Tarnish.</span>
        </p>
        <p className="text-lg md:text-3xl text-[#83918B] mt-2 tracking-wider">
          Unapologetically You.
        </p>
      </div>

      {/* Collection Grid */}
     
    <CollectionDisplay />
    </div>
  )
}

export default CollectionPage
