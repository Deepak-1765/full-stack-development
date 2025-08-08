import { useNavigate } from 'react-router-dom';

function LogoutPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false); // Reset login status
    navigate('/HomePage'); // Redirect to home
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Logout Your Bank Account</h2>

      <button
        onClick={handleLogout}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow"
      >
        Confirm
      </button>
    </div>
  );
}

export { LogoutPage };
