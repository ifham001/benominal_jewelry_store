import React from 'react';
import Image from 'next/image';
import designImage from '../../public/untitled folder/design.png'; // Replace this with your image path

const DesignPhilosophy = () => {
  return (
    <section className="text-center px-4 md:px-16 py-16 bg-white">
      <h2 className="text-[2.5rem] md:text-5xl font-serif text-[#2c3e35] mb-10 leading-tight">
        The Design <br className="hidden sm:block" /> Philosophy
      </h2>

      <div className="mb-10">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={designImage}
            alt="Jewelry Design"
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        <span className="text-[#b18b2c] font-medium">Minimalism</span> meets modern luxury. Our designs are
        rooted in Korean fashion culture, shaped for{' '}
        <span className="text-[#b18b2c] font-medium">global style</span>.
      </p>
    </section>
  );
};

export default DesignPhilosophy;
