import React from "react";
import Link from "next/link";
import Button from "@/ui/button/Button";

export default function MobileNav({ loggedIn, loginHandler, closeMenu }) {
  return (
    <div className="md:hidden absolute top-12 left-0 right-0 bg-black rounded-2xl opacity-85 shadow-lg py-4 px-6 z-50">
      <Link
        href="/"
        onClick={closeMenu}
        className="block py-2 text-white hover:text-gray-300 transition"
      >
        Home
      </Link>
      <Link
        href="/collection"
        onClick={closeMenu}
        className="block py-2 text-white hover:text-gray-300 transition"
      >
        Collection
      </Link>
      <Link
        href="/about-us"
        onClick={closeMenu}
        className="block py-2 text-white hover:text-gray-300 transition"
      >
        About Us
      </Link>
      <Link
        href="/contact-us"
        onClick={closeMenu}
        className="block py-2 text-white hover:text-gray-300 transition"
      >
        Contact
      </Link>
      {!loggedIn && (
        <div className="mt-2" onClick={closeMenu}>
          <Button onClick={loginHandler} children="Login" />
        </div>
      )}
    </div>
  );
}
