import { Link } from 'react-router-dom';

function Header1() {
  return (
    <header className="bg-blue-400 shadow text-gray-800">
      <nav className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link to="/Homepage">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Home
          </button>
          </Link> 
        </div>

        <div className="space-x-6">
          <Link to="/CreateAccount">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Create Account</button>
          </Link>
          
          <Link to="/Login">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Login</button> 
          </Link>
      

        </div>
      </nav>
    </header>

  )
};
export { Header1 }