"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  
  // name field
  const [name, setName] = useState("");

  // quantity field
  const [quantity, setQuantity] = useState(1);

  // category field
  const [category, setCategory] = useState("Produce");
  
  // name handlers
  const updateItemName = (e) => {
    setName(e.target.value);
  }

  // quantity handlers
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

  // category handlers
  const updateItemCategory = (e) => {
    setCategory(e.target.value);
  }

    // form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const item = {
        name,
        quantity,
        category: category.toLowerCase()
      };
      
      onAddItem(item);
      
      setName("");
      setQuantity(1);
      setCategory("Produce");
    }
    
  return (
    <form onSubmit={handleSubmit} className="rounded border border-gray-200 p-4 bg-white">
      {/* name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={updateItemName}
          required
          className="text-gray-800 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          placeholder="e.g., milk, 4 L 🥛"
        />
      </div>

      {/* quantity */}
      <div>
        <span className="text-sm text-gray-500">Quantity (1–20)</span>
        <p className="mb-3">
            <span className="text-xl text-gray-600">Current Quantity: </span>
            <span className="text-3xl font-bold text-pink-400">{quantity}</span>
        </p>
        <div className="flex items-center gap-3">
          <button 
            type="button"
            className="w-15 h-15 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 disabled:from-gray-50 disabled:to-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed text-gray-700 font-bold text-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95" 
            aria-label="Decrease quantity" 
            disabled={quantity === 1} 
            onClick={decrement}
          >
            −
          </button>
            
          <button 
            type="button"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 disabled:from-pink-50 disabled:to-pink-300 disabled:cursor-not-allowed text-white font-bold text-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95" 
            aria-label="Increase quantity" 
            disabled={quantity === 20} 
            onClick={increment}
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">Allowed range: 1–20</p>
      </div>

      {/* category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mt-4 mb-1">
          Category
        </label>
        <select
          id="category"
          autoComplete="off"
          value={category}
          onChange={updateItemCategory}
          required
          className="text-gray-800 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
            
      {/* submit button */}
      <button
        type="submit"
        className="w-full mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200"
      >
        Add Item
      </button>
    </form>
  );
}


