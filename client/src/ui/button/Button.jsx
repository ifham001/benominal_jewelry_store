import React from "react";
import classNames from "classnames";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
}) {
  const baseStyles = "rounded-full font-medium transition-all duration-200 ease-in-out transform active:scale-95 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
  
  const variants = {
    primary: "bg-[#1B4332] text-[#A37E2C] hover:bg-[#14532d] shadow-md hover:shadow-lg",
    secondary: "bg-white border border-[#1B4332] text-[#1B4332] hover:bg-[#f0f9ff] shadow-md hover:shadow-lg",
    outline: "bg-white border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-[#A37E2C] shadow-md hover:shadow-lg",
    success: "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-[#1B4332] hover:bg-[#f0f9ff] hover:shadow-md"
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}
