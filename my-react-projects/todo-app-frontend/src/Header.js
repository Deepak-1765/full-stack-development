import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="bg-blue-200 shadow">
      <nav className="flex items-center justify-between p-3">
        <Link to="/" className="text-gray-800 font-bold text-xl">
          <h2 className="text-2xl font-bold text-gray-800 p-2">My To-Do App</h2>

        </Link>


        <div class="space-x-6">
          <Link to="/Add" class="text-gray-700 hover:text-blue-600 font-medium transition">Add</Link>
          <Link to="/Show" class="text-gray-700 hover:text-blue-600 font-medium transition">Show</Link>
          <Link to="/Done" class="text-gray-700 hover:text-blue-600 font-medium transition p-2">Done</Link>

        </div>
      </nav>
    </header>

  )
};
export { Header }