import { useState } from "react";

function TransferPage() {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `From Account: ${formData.fromAccount}\n` +
      `To Account: ${formData.toAccount}\n` +
      `Amount: ₹${formData.amount}`
    );

    // Clear the form
    setFormData({
      fromAccount: "",
      toAccount: "",
      amount: ""
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        Transfer Money Between Account
      </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="font-medium mb-1 text-black">From Account</label>
          <input
            type="text"
            name="fromAccount"
            value={formData.fromAccount}
            onChange={handleChange}
            placeholder="Enter your account no"
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">To Account</label>
          <input
            type="text"
            name="toAccount"
            value={formData.toAccount}
            onChange={handleChange}
            placeholder="Enter your receiver account no"
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Amount</label>
          <input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount you want to send"
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

export { TransferPage };
