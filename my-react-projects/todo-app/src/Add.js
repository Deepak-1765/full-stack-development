import { useState } from "react";

function Add(props) {
  let setTodo = props.setTodo;

  let [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    todoStatus: "pending"
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Added Task " + JSON.stringify(formData));
    setFormData({ todoTitle: "", dueDate: "", todoStatus: "pending" }); // reset form

    // update state
    setTodo(previousTodo => ([
      ...previousTodo,
      {
        id: Date.now(),
        todoTitle: formData.todoTitle,
        dueDate: formData.dueDate,
        todoStatus: formData.todoStatus,
        completeDate: "",
      }
    ]));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Add Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium mb-1 text-black">Todo Title:</label>
          <input
            type="text"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Status:</label>
          <select
            name="todoStatus"
            value={formData.todoStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <br />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Add };
