"use client";
import React, { useState } from 'react';
import Button from '@/ui/button/Button';
// Assuming you might want to use icons, for example, from react-icons
// import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your email subscription logic here
    console.log('Subscribing with email:', email);
    setEmail(''); // Clear input after submission
  };

  return (
    <div className="font-sans m-4 ">
      {/* Stay in the Loop Section */}
      <section className="bg-[#f0f5f3] py-12 md:py-20 px-4 rounded-xl shadow-lg my-8">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3a5a40] mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Be the <span className="text-[#d4a373] font-semibold">first</span> to know about drops, restocks, and styling <span className="text-[#d4a373] font-semibold">secrets</span>.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3a5a40] focus:border-transparent outline-none text-sm"
              required
            />
            <Button
              type="submit"
              className="w-full sm:w-auto"
            >
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-8 md:py-12 my-8 border border-yellow-300 rounded-xl shadow-sm">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center items-center space-x-4">
            {/* Replace with your actual social media icons/links */}
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#3b5998]">
              {/* <FaFacebookF size={24} /> Example Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> {/* Placeholder Facebook Icon */}
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-[#E1306C]">
              {/* <FaInstagram size={24} /> Example Icon */}
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C8.74 2 8.333.015 6.85.07c-1.897.072-2.835.318-3.73.686-.9.368-1.584.88-2.257 1.554-.673.673-1.186 1.357-1.554 2.257-.368.895-.614 1.833-.686 3.73C.015 8.333 0 8.74 0 12s.015 3.667.07 5.15c.072 1.897.318 2.835.686 3.73.368.9.88 1.584 1.554 2.257.673.673 1.357 1.186 2.257 1.554.895.368 1.833.614 3.73.686 1.473.055 1.88.07 5.15.07s3.677-.015 5.15-.07c1.897-.072 2.835-.318 3.73-.686.9-.368 1.584-.88 2.257-1.554.673-.673 1.186-1.357-1.554-2.257.368-.895.614-1.833.686-3.73.055-1.473.07-1.88.07-5.15s-.015-3.677-.07-5.15c-.072-1.897-.318-2.835-.686-3.73-.368-.9-.88-1.584-1.554-2.257-.673-.673-1.357-1.186-2.257-1.554C16.833.318 15.897.072 14.15.07 12.667.015 12.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.054 1.265.07 1.646.07 4.85s-.016 3.585-.07 4.85c-.055 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.265.054-1.646.07-4.85.07s-3.585-.016-4.85-.07c-1.17-.055-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.054-1.265-.07-1.646-.07-4.85s.016-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217.562.477.96.896-1.382.42-.419.819-.679-1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 7.042c-2.024 0-3.666 1.642-3.666 3.666s1.642 3.666 3.666 3.666 3.666-1.642 3.666-3.666S14.024 9.202 12 9.202zm0 5.832c-1.196 0-2.166-.97-2.166-2.166s.97-2.166 2.166-2.166 2.166.97 2.166 2.166-.97 2.166-2.166 2.166zm6.406-6.707c-.63 0-1.141.512-1.141 1.141s.512 1.141 1.141 1.141 1.141-.512 1.141-1.141-.512-1.141-1.141-1.141z" clipRule="evenodd" /></svg> {/* Placeholder Instagram Icon */}
            </a>
            <a href="#" aria-label="Another Social Media" className="text-gray-600 hover:text-blue-500">
              {/* Use your icon here, e.g. <FaTwitter size={24} /> */}
              <span className="w-6 h-6 inline-block bg-blue-400 rounded-full"></span> {/* Placeholder simple icon */}
            </a>
             <a href="#" aria-label="X (Twitter)" className="text-gray-600 hover:text-black">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> {/* Placeholder X Icon */}
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;

// How to use it in another component:
// import NewsletterSubscribe from './NewsletterSubscribe';
//
// function App() {
//   return (
//     <div>
//       {/* Other components */}
//       <NewsletterSubscribe />
//       {/* Other components */}
//     </div>
//   );
// }