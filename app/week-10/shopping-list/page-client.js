"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from "react";

export default function PageClient() {
    const [items, setItems] = useState(itemsData);
    const [selectedIngredient, setSelectedIngredient] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        let ingredient = item.name;
        ingredient = ingredient.toLowerCase();
        ingredient = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        ingredient = ingredient.split(',')[0]; // take first part if comma exists
        setSelectedIngredient(ingredient);
    }

    return (
        <div className="flex">
            <div className="flex-1 max-w-lg m-2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            <div className="flex-1 max-w-lg m-2">
                <MealIdeas ingredient={selectedIngredient} />
            </div>
        </div>
    );
}