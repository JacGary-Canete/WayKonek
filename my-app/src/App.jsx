import { useState } from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  return (
    <>
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