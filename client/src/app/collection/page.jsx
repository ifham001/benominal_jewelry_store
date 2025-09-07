import CollectionDisplay from '@/ui/collection/CollectionDisplay'
import CollectionHeader from '@/ui/collection/CollectionHeader'
import ProductsGrid from '@/ui/product/ProductsGrid'
import React from 'react'
import img from '../../../public/hero/hero-banner2.png'
import Image from 'next/image'


function page() {
  return (
    <>  
   
        <CollectionHeader 
          title={'collections'}
          img={img}/>
        <CollectionDisplay/>
        <div className="flex font mt-10 md:mt-20 flex-col items-center justify-center text-center px-4">
        <p className="text-3xl sm:text-xl md:text-6xl font-extralight text-[#1B4332]">
          New Arrivals - Designed to Turn Heads
        </p>
        <p className="text-xl sm:text-3xl md:text-3xl text-[#83918B] mt-8">
          Discover our bestselling styles and the latest drops.
        </p>
      </div>
        <ProductsGrid/>
      
    
    
    </>
  )
}

export default page