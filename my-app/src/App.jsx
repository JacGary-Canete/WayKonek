// import { useState } from 'react';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import LandingPage from './pages/LandingPage';

// function App() {
//   const [currentPage, setCurrentPage] = useState('landingpage');
//   const [user, setUser] = useState(null);

//   return (
//     <>
//       {currentPage === 'landingpage' && (
//         <LandingPage
//           onNavigate={setCurrentPage}
//           onLogin={setUser}
//         />
//       )}
//       {currentPage === 'login' && (
//         <LoginPage
//           onNavigate={setCurrentPage}
//           onLogin={setUser}
//         />
//       )}

//       {currentPage === 'register' && (
//         <RegisterPage
//           onNavigate={setCurrentPage}
//           onRegister={setUser}
//         />
//       )}

//       {currentPage === 'dashboard' && (
//         <h1>Dashboard</h1>
//       )}

//       {currentPage === 'admin-panel' && (
//         <h1>Admin Panel</h1>
//       )}
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import WifiRegistrationPage from './pages/WifiRegistrationPage';
import BandwidthMonitor from './pages/BandwidthMonitor';
import MyAccountPage from './pages/MyAccountPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'wifi-registration':
        return <WifiRegistrationPage />;
      case 'my-account':
        return <MyAccountPage />;
      case 'bandwidth-monitor':
        return <BandwidthMonitor />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div style={{ flex: 1 }}>{renderPage()}</div>
    </div>
  );
}

export default App;