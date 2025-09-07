import React from 'react';
import diamond from '../../public/promises/diamond.svg';
import feather from '../../public/promises/feather.svg';
import check from '../../public/promises/correct.svg';
import Image from 'next/image';

const OurPromise = () => {
  return (
    <div className="bg-[#dce7e2] rounded-2xl py-12 px-6 m-4 sm:px-10 md:px-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1d3c2e] mb-12">
        Our Promise
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {/* Promise 1 */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-lg sm:text-xl font-light text-[#1d3c2e] leading-snug">
            Anti-Tarnish<br />Guarantee
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-xs">
            Never worry about dullness – beauty that lasts.
          </p>
          <div className="bg-white p-4 rounded-xl">
            <Image src={diamond} alt="Diamond Icon" width={40} height={40} />
          </div>
        </div>

        {/* Promise 2 */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-lg sm:text-xl font-light text-[#1d3c2e] leading-snug">
            6-Month<br />Warranty
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-xs">
            Every piece is backed by our no-fuss warranty.
          </p>
          <div className="bg-white p-4 rounded-xl">
            <Image src={check} alt="Check Icon" width={40} height={40} />
          </div>
        </div>

        {/* Promise 3 */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-lg sm:text-xl font-light text-[#1d3c2e] leading-snug">
            Lightweight, Skin-Friendly<br />Materials
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-xs">
            Style meets comfort, every new day with elegance.
          </p>
          <div className="bg-white p-4 rounded-xl">
            <Image src={feather} alt="Feather Icon" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
