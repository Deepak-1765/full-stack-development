import MyComponent from "../props-example-2/MyComponent";

function PropsExample() {
    let fruits = ['Banana', 'Orange', 'Mango'];

    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Fruit List</h1>
            <MyComponent fruits={fruits} />
        </div>
    );
}

export default PropsExample;
