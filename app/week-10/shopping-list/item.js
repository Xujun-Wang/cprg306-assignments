import React from "react";

export default function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <div
      className="rounded bg-white p-2 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-gray-100 dark:hover:bg-pink-500 relative"
    >
      <div onClick={onSelect} className="cursor-pointer">
        <p className="font-medium">{name}</p>
        <p>Quantity: {quantity}</p>
        <p className="capitalize">Category: {category}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute bottom-2 right-2 bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
      >
        Delete
      </button>
    </div>
  );
}
