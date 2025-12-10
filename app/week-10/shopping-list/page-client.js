"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";

export default function PageClient() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState("");

    useEffect(() => {
        if (user) loadItems();
    }, [user]);

    async function loadItems() {
        let itemsData = await getItems(user.uid);
        setItems(itemsData);
    }

    if (!user) {
        return <div className="m-4 text-lg">Loading...</div>;
    }

    const handleAddItem = async (newItem) => {
        let itemId = await addItem(user.uid, newItem);
        newItem.id = itemId;
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