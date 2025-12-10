"use client"

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [incrementIsEnabled, setIncrementIsEnabled] = useState(false);
    const [decrementIsEnabled, setDecrementIsEnabled] = useState(true);

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
        <div className="p-2 m-4 bg-blue-950 max-w-3xs rounded-lg">
            <h2 className="text-x1 font-bold">Item Quantity</h2>
            <p className="mb-4">Quantity: {quantity}</p>
            <div className="flex justify-center w-full">
                <button disabled={decrementIsEnabled} className="bg-red-700 disabled:bg-gray-700 p-2 rounded-lg mr-2 w-7 h-7 line-height" onClick={decrement}>-</button>
                <button disabled={incrementIsEnabled} className="bg-green-700 disabled:bg-gray-700 p-2 rounded-lg w-7 h-7 text-align" onClick={increment}>+</button>
            </div>
        </div>
    );
}