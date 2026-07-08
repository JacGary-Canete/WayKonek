import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [user, setUser] = useState(null);

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage
          onNavigate={setCurrentPage}
          onLogin={setUser}
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