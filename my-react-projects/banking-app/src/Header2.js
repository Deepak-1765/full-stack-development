import { Link } from 'react-router-dom';

function Header2() {
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
          <Link to="/BankDetail">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Bank Detail</button>
          </Link>
          
          <Link to="/TransferPage">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Transfer</button> 
          </Link>
           <Link to="/TransactionPage">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Transaction</button>
          </Link>
          
          <Link to="/Logout">
          <button className="text-gray-700 hover:text-red-600 font-medium transition">Logout</button> 
          </Link>
      
      

        </div>
      </nav>
    </header>

  )
};
export { Header2 }