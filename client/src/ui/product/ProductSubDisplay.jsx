import Image from 'next/image';
import React from 'react';
import wishlist_icon from '../../../public/product/subDisplay/wishlistIcon.svg';
import cart_icon from '../../../public/product/subDisplay/cartIcon.svg';

function ProductSubDisplay({ title, price, description, color, image }) {
  const actualPrice = Number(price) + 350;

  const setJewelryColour = (color) => {
    switch (color.toLowerCase()) {
      case 'gold':
        return 'bg-[#FFD700]';
      case 'silver':
        return 'bg-[#C0C0C0]';
      case 'rose gold':
        return 'bg-[#B76E79]';
      default:
        return 'bg-gray-300';
    }
  };

  const jewelryColorClass = setJewelryColour(color);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[220px] rounded-xl border border-[#006039] shadow-sm p-2 flex flex-col justify-between">
      {/* Product Image */}
      <div className="w-full aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>

      {/* Price + Color */}
      <div className="text-[#1B4332] mt-1 text-sm font-semibold truncate">{title}</div>

      <div className="mt-2 flex items-center text-xs sm:text-sm font-semibold justify-between">
        
        <div className="flex align-center  gap-1">
          <p className="text-[#1B4332]">₹{price}/-</p>
          <p className="line-through text-gray-400 mt-0.5 text-[10px] sm:text-xs">
            ₹{actualPrice}
          </p>
        </div>
        <div className="flex items-center gap-1 max-w-[80px] truncate">
          <p className="text-gray-500 text-[10px] capitalize truncate">{color}</p>
          <div className={`w-3 h-3 rounded-full ${jewelryColorClass}`} />
        </div>
      </div>

      {/* Title */}

      {/* Description */}
      <div className="text-[#83918B] text-[11px] leading-tight mt-1 line-clamp-3">
      {description.length > 40 ? description.slice(0, 40) + '...' : description}

        <br />
        <span className="font-semibold">Korean Style</span>
      </div>

      {/* Bottom Icons */}
      <div className="mt-3 flex items-center justify-between">
        {/* Wishlist Icon */}
        <button className="p-2 rounded-full bg-[#EAF2EF]">
          <Image src={wishlist_icon} alt="Wishlist" width={14} height={14} />
        </button>

        {/* Add to Bag Button */}
        <button className="flex items-center justify-center gap-2 flex-1 ml-2 py-1 rounded-full bg-[#1B4332] text-[#A37E2C] text-xs sm:text-sm font-medium">
          <Image src={cart_icon} alt="Cart" width={'auto'} height={14} />
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default ProductSubDisplay;
