function MyComponent({ fruits }) {
    return (
        <ul className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center space-y-4">
            {fruits.map((fruit, index) => (
                <li
                    key={index}
                    className="text-lg font-medium text-indigo-700 border-b pb-2 last:border-b-0"
                >
                    🍉 {fruit}
                </li>
            ))}
        </ul>
    );
}

export default MyComponent;
