export default function Item(item) {
    return (
        <li className="m-4 p-2 bg-blue-950 max-w-3xs rounded-lg">
            <h2 className="text-x1 font-bold">{item.name}</h2>
            <p>Left in stock: {item.quantity}</p>
            <p>Find in: {item.category}</p>
        </li>
    );
}