'use client'
import { Children, useState } from 'react'


export default function PopUpModal({ isOpen, onClose ,children }) {
  


  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-xl overflow-hidden">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl font-bold">
          &times;
        </button>
        {children}
        </div>
    </div>
  )
}
