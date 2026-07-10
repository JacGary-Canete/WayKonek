import React from 'react';

const menuItems = [
  { key: 'dashboard', label: '📊 Dashboard' },
  { key: 'wifi-registration', label: '📶 Wi-Fi Registration' },
  { key: 'my-devices', label: '💻 My Devices' },
  { key: 'bandwidth-monitor', label: '📈 Bandwidth Monitor' },
  { key: 'my-account', label: '👤 My Account' },
];

export default function DashboardSidebar({
  activeKey = 'wifi-registration',
  onNavigate,
  onLogout,
  userName = 'Juan Dela Cruz',
  userRole = 'Student',
}) {
  return (
    <div style={{
      width: '220px', backgroundColor: '#3D0808',
      borderRight: '2px solid rgba(212,168,67,0.3)', padding: '24px 16px',
      color: '#E8C976',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>WayKonek</div>
      <div style={{ fontSize: '12px', color: 'rgba(232,201,118,0.7)', marginBottom: '18px' }}>{userRole}</div>

      {menuItems.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <div
            key={item.key}
            onClick={() => onNavigate?.(item.key)}
            style={{
              marginBottom: '8px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? 'rgba(212,168,67,0.12)' : 'transparent',
              color: isActive ? '#FFFFFF' : (item.key === 'dashboard' ? '#FFFFFF' : 'rgba(232,201,118,0.85)'),
              border: isActive ? '1px solid rgba(212,168,67,0.3)' : '1px solid transparent',
            }}
          >
            {item.label}
          </div>
        );
      })}

      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <button
          onClick={onLogout}
          style={{
            width: '100%', padding: '10px 12px', borderRadius: '8px',
            border: '1px solid rgba(212,168,67,0.3)', background: 'transparent',
            color: '#E8C976', cursor: 'pointer', fontWeight: 'bold',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
