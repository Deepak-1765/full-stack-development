import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); 

  function handleGetStarted() {
    navigate('/CreateAccount'); 
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">🏛️ My Banking App</h1>
        <p className="text-gray-600 text-lg mb-6">
          💼 Banking you can trust — secure, simple, and smart.
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export { HomePage };
