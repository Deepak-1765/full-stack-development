function TransactionPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        Your Bank Transactions
      </h2>

      <table className="table-auto w-full text-left text-gray-700 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">S.no</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Transfer Type</th>
            <th className="border px-4 py-2">Account No</th>
            <th className="border px-4 py-2">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">10/08/2025</td>
            <td className="border px-4 py-2">₹5000</td>
            <td className="border px-4 py-2">Cash Deposit</td>
            <td className="border px-4 py-2">70156xxxxx</td>
            <td className="border px-4 py-2">123456</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">09/08/2025</td>
            <td className="border px-4 py-2">₹2000</td>
            <td className="border px-4 py-2">ATM Withdrawal</td>
            <td className="border px-4 py-2">70156xxxxx</td>
            <td className="border px-4 py-2">654321</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">08/08/2025</td>
            <td className="border px-4 py-2">₹3000</td>
            <td className="border px-4 py-2">Online Transfer</td>
            <td className="border px-4 py-2">70156xxxxx</td>
            <td className="border px-4 py-2">789012</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { TransactionPage };
