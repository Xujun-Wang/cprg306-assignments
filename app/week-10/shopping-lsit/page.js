"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../../contexts/AuthContext";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      if (!user) {
        setItems([]);
        return;
      }

      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user]);

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const itemWithId = { id: newItemId, ...newItem };
      setItems([...items, itemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Handle deleting an item
  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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
          <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem} />
        </div>
        {/*Meal ideas side */}
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
