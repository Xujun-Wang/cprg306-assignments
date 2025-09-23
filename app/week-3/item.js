import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    // <li className="border p-2 rounded">
    <li className="rounded bg-white p-2 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
