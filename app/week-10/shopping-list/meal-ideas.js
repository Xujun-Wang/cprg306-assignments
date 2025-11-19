"use client";

import { useState, useEffect } from "react";

// using api to fetch data from mealideas
async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; // if found meals, return meals; if not, return empty list
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load meal ideas when ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }

    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      {ingredient ? (
        <p className="text-lg font-semibold mb-2">Meal ideas for &ldquo;{ingredient}&rdquo;</p>
      ) : (
        <p className="text-lg font-semibold mb-2">Meal ideas (select an item)</p>
      )}
      {ingredient ? (
        <div>
          <ul className="grid grid-cols-2 gap-2">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="bg-white p-3 rounded shadow-lg dark:bg-slate-800"
              >
                {meal.strMeal}
              </li>
            ))}
          </ul>
          {meals.length === 0 && (
            <p className="text-gray-500">
              No meal ideas found.
            </p>
          )}
        </div>
      ) : (<p className="text-gray-500">Choose an item to see ideas.</p>)
      }
    </div>
  );
}
