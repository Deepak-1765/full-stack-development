import React from 'react';
import { Header } from './Header'
import { HomePage } from './HomePage'
import { ProfilePage } from './ProfilePage'
import { FriendsPage } from './FriendsPage'
import { Footer} from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      
      {/*BrowserRouter component used to define routing*/}
      <BrowserRouter>
      <Header />

          {/*Routes component used to group routes*/}
         <Routes>     
          {/*Route component define path with our page component */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
         </Routes> 

       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
