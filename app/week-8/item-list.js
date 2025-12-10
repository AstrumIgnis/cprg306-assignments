"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortby, setSortBy] = useState("name");


    const getSortedItems = () => {
        let ItemData = [...items]; // Create a copy of items to avoid mutating props
        if (sortby === "name") {
            return ItemData.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }

        if (sortby === "category") {
            return ItemData.sort((a, b) => {
                return a.category.localeCompare(b.category);
            });
        }

        if (sortby === "grouped") {
            const groupedData = ItemData.reduce((groupedItems, item) => {
                const group = item.category;
                if (groupedItems[group] == null) groupedItems[group] = [];
                groupedItems[group].push(item)
                return groupedItems;
            }, {});

            return Object.keys(groupedData).map((key) => ({
                key,
                items: groupedData[key]
            })).sort((a, b) => {
                return a.key.localeCompare(b.key);
            });
        }
    }

    const sortedItems = getSortedItems();

    return (
        <div className="m-4">
            <div className="mb-4">
                <label htmlFor="sort-by" className="mr-2 font-bold">Sort By:</label>
                <button
                    className={`text-white font-bold py-2 px-4 rounded-lg mr-2 ${sortby === "name" ? "bg-blue-500 hover:bg-blue-400" : "bg-blue-700 hover:bg-blue-600"}`}
                    onClick={() => setSortBy("name")}>
                    Name
                </button>
                <button
                    className={`text-white font-bold py-2 px-4 rounded-lg mr-2 ${sortby === "category" ? "bg-blue-500 hover:bg-blue-400" : "bg-blue-700 hover:bg-blue-600"}`}
                    onClick={() => setSortBy("category")}>
                    Category
                </button>
                <button
                    className={`text-white font-bold py-2 px-4 rounded-lg ${sortby === "grouped" ? "bg-blue-500 hover:bg-blue-400" : "bg-blue-700 hover:bg-blue-600"}`}
                    onClick={() => setSortBy("grouped")}>
                    Grouped Category
                </button>
            </div>

            {sortby === "grouped" ? (
                <ul>
                    {sortedItems.map((group) => (
                        <li key={group.key} className="mb-6">
                            <h2 className="text-xl font-bold mb-2 capitalize">{group.key}</h2>
                            <ul>
                                {group.items.map((item) => (
                                    <Item key={item.id} {...item} onSelect={onItemSelect} />
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    {sortedItems.map((item) => (
                        <Item key={item.id} {...item} onSelect={onItemSelect} />
                    ))}
                </ul>
            )}
        </div>
    )
}