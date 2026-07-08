import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landingpage');
  const [user, setUser] = useState(null);

  return (
    <>
      {currentPage === 'landingpage' && (
        <LandingPage
          onNavigate={setCurrentPage}
          onLogin={setUser}
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onNavigate={setCurrentPage}
          onLogin={setUser}
        />
      )}

      {currentPage === 'register' && (
        <RegisterPage
          onNavigate={setCurrentPage}
          onRegister={setUser}
        />
      )}

      {currentPage === 'dashboard' && (
        <h1>Dashboard</h1>
      )}

      {currentPage === 'admin-panel' && (
        <h1>Admin Panel</h1>
      )}
    </>
  );
}

export default App;