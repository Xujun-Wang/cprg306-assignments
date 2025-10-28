"use client";

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean up item name: keep only content before comma or emoji
    const cleanedName = item.name
      .split(/[,\p{Emoji}]/u)[0]
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping List + Meal Ideas</h1>
      <div className="grid grid-cols-2 gap-6">
        {/*Shopping list side*/}
        <div className="space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/*Meal ideas side */}
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
