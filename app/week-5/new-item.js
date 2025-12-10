"use client"

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const [incrementIsEnabled, setIncrementIsEnabled] = useState(false);
    const [decrementIsEnabled, setDecrementIsEnabled] = useState(true);

    const submitFunction = (event) => {
        event.preventDefault();

        const newItem = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log("New Item Submitted:", newItem);
        alert(`New Item Submitted:\n${newItem.name}\nQuantity: ${newItem.quantity}\nCategory: ${newItem.category}
            `);

        // Reset form fields after submission
        setQuantity(1);
        setName("");
        setCategory("produce");
        setIncrementIsEnabled(false);
        setDecrementIsEnabled(true);
    }

    // Functions to handle increment and decrement also enable/disable buttons if limits of 1 or 20 are reached
    const increment = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setIncrementIsEnabled(newQuantity >= 20);
        setDecrementIsEnabled(newQuantity <= 1);
    }

    const decrement = () => {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        setIncrementIsEnabled(newQuantity >= 20);
        setDecrementIsEnabled(newQuantity <= 1);
    }

    return (
        <form className="p-2 mt-3 mb-1 bg-blue-950 max-w-sm w-full rounded-lg" onSubmit={submitFunction}>
            <div id="name-input" className="mb-4">
                <input
                    className="text-black w-full back justify-between bg-white rounded-lg p-1"
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </div>

            <div id="quantity-category-row" className="flex justify-between mb-4">
                <div id="quantity-input" className="w-36 flex justify-between bg-white rounded-lg p-1">
                    <span className="text-black">{quantity}</span>
                    <div className="flex justify-end w-full">
                        <button type="button" disabled={decrementIsEnabled} className="bg-red-700 disabled:bg-gray-700 hover:bg-red-600 rounded-lg mr-1 w-7 h-7" onClick={decrement}>-</button>
                        <button type="button" disabled={incrementIsEnabled} className="bg-green-700 disabled:bg-gray-700 hover:bg-green-600 rounded-lg mr-1 w-7 h-7" onClick={increment}>+</button>
                    </div>
                </div>

                <div id="category-input" className="w-36 flex justify-between bg-white rounded-lg p-1">
                    <select className="w-full flex justify-between bg-white text-black rounded-lg p-1"
                        onChange={e => setCategory(e.target.value)}
                        value={category}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="bg-green-700 p-2 rounded-lg w-full">Add Item</button>
        </form>
    );
}