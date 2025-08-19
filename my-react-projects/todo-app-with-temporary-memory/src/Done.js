function Done(props) {
  let todoArr = props.todo;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Completed Tasks</h2>

      <table className="min-w-full table-auto border text-black border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Todo Title</th>
            <th className="px-4 py-2 border">Completed Date</th>
          </tr>
        </thead>

        <tbody>
          {todoArr.map((todo) => (
            todo.todoStatus === "completed" && (
              <tr key={todo.id}>
                <td className="px-4 py-2 border">{todo.todoTitle}</td>
                <td className="px-4 py-2 border">{todo.completeDate?.toLocaleDateString()}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Done };
