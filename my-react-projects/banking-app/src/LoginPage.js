import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Logic for checking credentials can be added here
    setIsLoggedIn(true); // Set login state
    navigate('/BankDetail'); // Redirect to bank detail page or dashboard
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Login To Your Bank Account</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label className="font-medium mb-1 text-black">Mobile Number</label>
          <input
            type="number"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded-md shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { LoginPage };
