"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();

    return data.meals || [];
}

async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();

    return data.meals[0] || null;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        if (!ingredient) {
            return;
        }
        loadMealIdeas();
    }, [ingredient]);

    async function handleClick(meal) {
        if (selectedMeal?.idMeal === meal.idMeal) {
            setSelectedMeal(null); // deselect item
            return;
        }

        const mealDetails = await fetchMealDetails(meal.idMeal);
        setSelectedMeal(mealDetails); // select item
    }

    const getIngredients = (meal) => {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredientsList.push(`${meal[`strIngredient${i}`]} ${meal[`strMeasure${i}`].trim() !== "" ? `(${meal[`strMeasure${i}`]})` : ""}`);
            }
        }

        return ingredientsList;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            {!ingredient ? (
                <p>Please select an ingredient to see meal ideas.</p>
            ) : meals.length === 0 ? (
                <p>No meal ideas found for {ingredient}.</p>
            ) : (
                <div>
                    <p>Meal ideas for {ingredient}:</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal} onClick={() => handleClick(meal)} className="m-4 p-2 bg-blue-950 hover:bg-blue-800 max-w-3xs rounded-lg cursor-pointer">
                                {meal.strMeal}
                                {selectedMeal?.idMeal === meal.idMeal ? (
                                    <ul className="mt-2 ml-4">
                                        <p>Ingredients:</p>
                                        {getIngredients(selectedMeal).map((ingredient, index) => (
                                            <li key={index} className="ml-4">{ingredient}</li>
                                        ))}
                                    </ul>
                                ) : ""}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}
