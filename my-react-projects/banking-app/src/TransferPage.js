function TransferPage () {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Transfer Money Between Account</h2>
      
      <div>
          <label className="font-medium mb-1 text-black">From Account</label>
          <input
            type="text"
            name="todoTitle"
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
        </div>
    )
}

export { TransferPage }