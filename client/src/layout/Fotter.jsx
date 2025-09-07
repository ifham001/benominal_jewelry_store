import React from 'react';

const Fotter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer  className="m-4 bg-[#2a3d36] text-gray-300 py-8 md:py-12 px-4 md:px-8 rounded-lg mt-12"> {/* Adjusted background color, added rounded-lg and margin-top */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <li>
              <a href="/home" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/lookbook" className="hover:text-white transition-colors duration-300">
                Look book
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar with Copyright and Policies */}
      <div className="container mx-auto text-center mt-8 pt-8 border-t border-gray-700">
        <p className="text-xs text-gray-400 mb-2">
          &copy; {currentYear}  Made In India. Powered by Benominal.
        </p>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-3 md:space-x-4 text-xs text-gray-500">
            <li>
              <a href="/terms" className="hover:text-gray-300 transition-colors duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">
                Privacy & policies
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/cancellation-policy" className="hover:text-gray-300 transition-colors duration-300">
                Cancellation policies
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/return-policy" className="hover:text-gray-300 transition-colors duration-300">
                Return policies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Fotter;

// How to use it in another component:
// import Footer from './Footer';
//
// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
//         {/* Your page content here */}
//       </main>
//       <Footer />
//     </div>
//   );
// }