import { Link } from "react-router-dom";

function Header() {

  return (
    <div>
    <header>
      <nav className="flex justify-between items-center p-4 bg-red-300 shadow-md">

        <Link to = "/home">
        <button className="text-sm px-3 py-1 border border-gray-300 bg-gray-200 hover:bg-purple-500 transition">Home</button>
        </Link>

        <div className="flex items-center gap-3"> 
          <Link to="/profile">
        <button className="text-sm px-3 py-1 border border-gray-300 bg-gray-200 hover:bg-purple-500 transition">Profile</button>
        </Link>
        <Link to="/friends">
        <button className="text-sm px-3 py-1 border border-gray-300  bg-gray-200 hover:bg-purple-500 transition">Friends</button>
        </Link>
        </div>
        </nav>
    </header>
    </div>
  );
}

export { Header }
