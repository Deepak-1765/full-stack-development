function TodoList() {
  const todos = ["React assignment", "Review JavaScript basics", "Read Tailwind CSS"];

  return (
    <div className="bg-red-100 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-green-700">Completed Todo</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="text-green-900">{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
