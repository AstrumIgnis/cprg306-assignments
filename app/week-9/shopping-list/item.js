export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li className="m-4 p-2 bg-blue-950 hover:bg-blue-800 max-w-3xs rounded-lg" onClick={() => onSelect({ name, quantity, category })}>
            <h2 className="text-x1 font-bold">{name}</h2>
            <p>Left in stock: {quantity}</p>
            <p>Find in: {category}</p>
        </li>
    );
}