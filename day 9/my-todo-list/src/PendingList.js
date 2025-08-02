function PendingList() {
  const pending = ["Task 2", "Practice DSA problems", "Web Series"];

  return (
    <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-yellow-700">Pending Todo</h2>
      <ul>
        {pending.map((task,i) => (
          <li key={i} className="text-yellow-900">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export { PendingList} 
