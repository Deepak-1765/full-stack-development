import { useState } from 'react';
import { HomePage } from './HomePage';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { CreateAccountPage } from './CreateAccountPage';
import { LoginPage } from './LoginPage';
import { BankDetailPage } from './BankDetailPage';
import { TransferPage } from './TransferPage';
import { TransactionPage } from './TransactionPage';
import { LogoutPage } from './LogoutPage';
import { Footer } from './Footer';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <BrowserRouter>
        {/* Show Header1 if not logged in, Header2 if logged in */}
        {!isLoggedIn ? <Header1 /> : <Header2 />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route path="/Login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/BankDetail" element={<BankDetailPage />} />
          <Route path="/TransferPage" element={<TransferPage />} />
          <Route path="/TransactionPage" element={<TransactionPage />} />
          <Route path="/Logout" element={<LogoutPage setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
