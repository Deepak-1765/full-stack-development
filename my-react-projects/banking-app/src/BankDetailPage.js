import { useLocation } from "react-router-dom";

function BankDetailPage() {
  const location = useLocation();
  const { name, number, branch, balance } = location.state || {};

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-black">
        Your Account Details 
      </h2>

      <table className="table-auto w-full text-left text-gray-700 border border-gray-200"> 
        <tbody>
          <tr>
            <td className="border px-20 py-2 font-medium">Name</td>
            <td className="border px-20 py-2">Deepak</td>
          </tr>
          <tr>
            <td className="border px-20 py-2 font-medium">Number</td>
            <td className="border px-20 py-2">70156xxxxx</td>
          </tr>
          <tr>
            <td className="border px-20 py-2 font-medium">Branch</td>
            <td className="border px-20 py-2">HDFC Karnal</td>
          </tr>
          <tr>
            <td className="border px-20 py-2 font-medium">Balance</td>
            <td className="border px-20 py-2">₹4500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { BankDetailPage };
