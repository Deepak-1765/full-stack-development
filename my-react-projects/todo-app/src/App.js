import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { Show } from "./Show";
import { Header } from "./Header";
import { Done } from './Done.js';
import { Footer } from './Footer'

function App() {
  let[todo,setTodo] = useState([
    {
      "id" :1,
   "todoTitle": "Buy Clothes ",
    "dueDate" : "2-08-25",
   " todoStatus" : "Pending"
    },
        {
      "id" :2,
   "todoTitle": "Go to Gym",
    "dueDate" : "4-08-25",
   " todoStatus" : "Pending"
    },
        {
      "id" :3,
   "todoTitle": "Dancing",
    "dueDate" : "12-08-25",
   " todoStatus" : "Pending"
    },
        {
      "id" :4,
   "todoTitle": "Singing",
    "dueDate" : "2-08-25",
   " todoStatus" : "Pending"
    },

  ])

  return (
    <div class="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Add" element={<Add /> } />
          <Route path="/Show" element={<Show todo={todo} setTodo={setTodo}/>} />
          <Route path="/Done" element={<Done />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export { App };