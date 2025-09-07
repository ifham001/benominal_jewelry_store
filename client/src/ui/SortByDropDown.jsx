"use client";
import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Button from '@/ui/button/Button';

const SortByDropdown = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleSelect = (value) => {
    setSelected(value);
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className="relative  flex justify-end m-6 text-left">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-300 text-base md:text-lg"
      >
        <span>{selected ? selected : 'Sort by'}</span>
        {open ? (
          <KeyboardArrowUp fontSize="inherit" />
        ) : (
          <KeyboardArrowDown fontSize="inherit" />
        )}
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-sm text-gray-700">
          <Button
             onClick={() => setOpen(!open)}
             variant="ghost"
             size="small"
             className="w-full text-left px-4 py-2 rounded-none border-0 justify-start"
            >
              Select
            </Button>
            <Button
              onClick={() => handleSelect('Price: Low to High')}
              variant="ghost"
              size="small"
              className="w-full text-left px-4 py-2 rounded-none border-0 justify-start"
            >
              Price: Low to High
            </Button>
            <Button
              onClick={() => handleSelect('Price: High to Low')}
              variant="ghost"
              size="small"
              className="w-full text-left px-4 py-2 rounded-none border-0 justify-start"
            >
              Price: High to Low
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;
