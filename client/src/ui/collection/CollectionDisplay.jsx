import React from 'react'
import bracelet from '../../../public/collection/bracelet.jpg'
import necklace from '../../../public/collection/necklace.jpg'
import earing from '../../../public/collection/earing.jpg'
import ring from '../../../public/collection/ring.png'
import Link from 'next/link'
import Image from 'next/image'

function CollectionDisplay() {
    const items = [
        { src: ring, label: 'Rings' },
        { src: bracelet, label: 'Bracelets' },
        { src: earing, label: 'Earrings' },
        { src: necklace, label: 'Necklaces' },
      ]
  return (
    <div className="m-4 mt-10 md:mt-20 grid font-extralight grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <Link key={idx} href={`/collection/${item.label.toLowerCase()}`}>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover brightness-75"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl md:text-3xl">{item.label}</p>
              </div>
            </div>
          </Link>
        ))}
        </div>
  )
}

export default CollectionDisplay