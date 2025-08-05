import {Link} from  'react-router-dom'
function Header(){
    return(
    <header class="bg-blue-200 shadow">
  <nav class="flex items-center justify-between p-3">
  
    <h2 class="text-2xl font-bold text-gray-800 p-2">My To-Do App</h2>

 
    <div class="space-x-6">
      <Link to="/Add">
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition">Add</a>
      </Link>
      <Link to="/Show">
           <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition">Show</a>
      </Link>
     <Link to="/Done">
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition p-2">Done</a>
     </Link>
      
    </div>
  </nav>
</header>

    )
};
export {Header}