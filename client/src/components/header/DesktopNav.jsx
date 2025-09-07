import React from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@/ui/button/Button";
import ProfileDropdown from "./ProfileDropdown";

export default function DesktopNav({
  loggedIn,
  toggleProfileMenu,
  isProfileMenuOpen,
  loginHandler,
}) {
  return (
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
      <Link href="/" className="hover:text-gray-700 cursor-pointer">
        Home
      </Link>
      <Link href="/collection" className="hover:text-gray-700 cursor-pointer">
        Collections
      </Link>
      <Link href="/about-us" className="hover:text-gray-700 cursor-pointer">
        About Us
      </Link>
      <Link href="/contact-us" className="hover:text-gray-700 cursor-pointer">
        Contact
      </Link>

      {!loggedIn ? (
        <Button onClick={loginHandler} children="Login" />
      ) : (
        <div className="relative">
          <AccountCircleIcon
            className="cursor-pointer"
            onClick={toggleProfileMenu}
          />
          {isProfileMenuOpen && <ProfileDropdown onClose={toggleProfileMenu} />}
        </div>
      )}
    </div>
  );
}
