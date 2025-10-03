"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
  
    return (
      <section className="rounded border border-gray-200 p-4 bg-white">
        <p className="mb-3">
            <span className="text-sm text-gray-600">Quantity: </span>
            <span className="text-4xl font-bold text-blue-600">{quantity}</span>
        </p>
        <div className="flex items-center gap-3">
            {/* <button className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400" aria-label="Decrease quantity" disabled={quantity === 1} onClick={decrement}>-</button> */}
            <button 
            className="w-15 h-15 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 disabled:from-gray-50 disabled:to-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed text-gray-700 font-bold text-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95" 
            aria-label="Decrease quantity" 
            disabled={quantity === 1} 
            onClick={decrement}
          >
            −
          </button>
            {/* <button className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200" aria-label="Increase quantity" disabled={quantity === 20} onClick={increment}>+</button> */}
            <button 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-blue-200 disabled:to-indigo-300 disabled:cursor-not-allowed text-white font-bold text-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95" 
            aria-label="Increase quantity" 
            disabled={quantity === 20} 
            onClick={increment}
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-400">Allowed range: 1–20</p>
      </section>
    );
  }


