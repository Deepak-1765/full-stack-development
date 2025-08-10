import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    branch: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nMobile Number: ${formData.number}\nBranch: ${formData.branch}`
    );

    setFormData({
      name: "",
      number: "",
      branch: "",
      password: ""
    });
    navigate("/Login");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Create Your Bank Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font-medium mb-1 text-black">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Mobile Number</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Select Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          >
            <option value="">Select a branch</option>
            <option value="Sec-3">Sec-3</option>
            <option value="ITI Chwok">ITI Chwok</option>
            <option value="sec-36">sec-36</option>
            <option value="Modern Colony">Modern Colony</option>
            <option value="Meera Ghati">Meera Ghati</option>
          </select>
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
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

export { CreateAccountPage };
