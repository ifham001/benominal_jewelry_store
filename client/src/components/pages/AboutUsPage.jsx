
import React from 'react';



const AboutUsPage = () => {
    return (
      <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-green-900 mb-6">
          About Us
        </h1>
  
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          At <span className="text-yellow-700 font-semibold">Benominal</span>, we craft timeless 
          <span className="text-gray-900 font-medium"> Korean-imported stainless steel jewelry</span> 
          that celebrates minimalism, durability, and everyday elegance.
        </p>
  
        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
         
  
          <div className="space-y-5 w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
              Jewelry That Lasts a Lifetime
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Benominal pieces are sourced from Korea’s best artisans — rust-proof, hypoallergenic, 
              and designed to stay stunning forever.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you’re dressing casually or for a special event, our styles complement 
              both elegance and boldness, inspired by Korea and styled for the world.
            </p>
          </div>
        </div>
  
        {/* Stats/Values */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-900">1000+</h3>
            <p className="text-gray-500 mt-1 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-900">100%</h3>
            <p className="text-gray-500 mt-1 text-sm">Korean Imported</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-900">Hypoallergenic</h3>
            <p className="text-gray-500 mt-1 text-sm">Skin-Safe Jewelry</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsPage;
  