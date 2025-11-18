"use client";

import { useState } from "react";
import { useUserAuth } from "../../../contexts/AuthContext";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
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

  // Protect the page - only show if user is logged in
  if (!user) {
    return (
      <main className="p-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="mb-4">You must be logged in to view the shopping list.</p>
        <Link
          href="/week-10"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Login Page
        </Link>
      </main>
    );
  }

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
