"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import benominal_logo from "../../../public/header/Benominal_logo.svg";
import cart_icon from "../../../public/header/cart.svg";
import burger_nav from "../../../public/header/menu.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { isAuthenticated } from "@/store/user/slices/UserAuth-Slice";
import ProfileDropdown from "./ProfileDropdown";
import { usePathname, useRouter } from "next/navigation";



function Header() {
    const router = useRouter()
    const pathname = usePathname();
    const isCartPage = pathname.endsWith("/cart"); // Accurate match

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
 

  const { tokenId, userId } = useSelector((state) => state.userAuth);
  const { cartItems } = useSelector((state) => state.userCart);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const loginHandler = () => {
    if (!tokenId) {
      dispatch(isAuthenticated({ message: "Login" }));
      setIsLoggedIn(false)
    }
    if(tokenId){
      setIsLoggedIn(true)
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!tokenId);
  }, [tokenId]);
  const cartHandler =()=>{
    router.push(`/user/${userId}/cart`)
  }


  return (
    <div className="rounded-2xl sticky top-0 z-50 bg-white flex items-center justify-between px-4 py-2 m-4">
      {/* Logo */}
      <Link href="/">
        <Image
          src={benominal_logo}
          alt="Benominal logo"
          className="h-6 md:h-8 w-auto cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <DesktopNav
        loggedIn={loggedIn}
        toggleProfileMenu={toggleProfileMenu}
        isProfileMenuOpen={isProfileMenuOpen}
        loginHandler={loginHandler}
      />

      {/* Right Icons + Burger */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon with Red Dot - hydration safe */}
            
                <div onClick={cartHandler} className="relative block">
        <Image
            src={cart_icon}
            alt="Cart"
            className={`h-6 w-6 cursor-pointer transition-all duration-200 ${
            pathname.includes("/cart") ? "brightness-0 invert-0" : ""
            }`}
           
            priority
        />
        {cartItems.length > 0 && (
            <span className="absolute -top-0.5 -right-1 h-2 w-2 rounded-full bg-red-600" />
        )}
        </div>

     

        {/* Mobile Profile Icon */}
        {loggedIn && (
          <div className="relative md:hidden">
            <AccountCircleIcon
              className="cursor-pointer"
              onClick={toggleProfileMenu}
            />
            {isProfileMenuOpen && (
              <ProfileDropdown onClose={toggleProfileMenu} />
            )}
          </div>
        )}

        {/* Burger Menu Icon */}
        <div className="md:hidden">
          <Image
            src={burger_nav}
            alt="Menu"
            className="h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileNav
          loggedIn={loggedIn}
          loginHandler={loginHandler}
          closeMenu={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;
