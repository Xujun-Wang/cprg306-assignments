"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  // set default sort by name
  const [sortBy, setSortBy] = useState("name");

  // sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="space-y-4 mt-4">
    <div className="flex items-center gap-2">
      <span className="text-md text-white">Sort by:</span>
      {/* Sort buttons */}
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded font-bold ${
            sortBy === "name" ? "bg-pink-500 text-white" : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded font-bold ${
            sortBy === "category" ? "bg-pink-500 text-white" : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          Category
        </button>
      </div>

      {/* Items list */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </section>
  );
}
