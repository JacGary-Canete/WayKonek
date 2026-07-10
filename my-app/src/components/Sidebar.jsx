import React from 'react';

const menuItems = [
  { key: 'dashboard', label: '📊 Dashboard' },
  { key: 'wifi-registration', label: '📶 Wi-Fi Registration' },
  { key: 'bandwidth-monitor', label: '📈 Bandwidth Monitor' },
  { key: 'my-account', label: '👤 My Account' },
];

export default function Sidebar({ currentPage = 'bandwidth-monitor', onNavigate, userName = 'Student' }) {
  return (
    <aside
      style={{
        width: '240px',
        minHeight: '100vh',
        backgroundColor: '#3d0808',
        color: '#f3d07a',
        padding: '24px 16px',
        borderRight: '2px solid rgba(212, 168, 67, 0.35)',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>WayKonek</div>
      <div style={{ fontSize: '13px', color: 'rgba(243, 208, 122, 0.75)', marginBottom: '24px' }}>
        {userName}
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => {
          const isActive = currentPage === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate?.(item.key)}
              style={{
                textAlign: 'left',
                padding: '10px 12px',
                borderRadius: '10px',
                border: isActive ? '1px solid rgba(243, 208, 122, 0.4)' : '1px solid transparent',
                backgroundColor: isActive ? 'rgba(243, 208, 122, 0.16)' : 'transparent',
                color: isActive ? '#ffffff' : '#f3d07a',
                cursor: 'pointer',
                fontWeight: isActive ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
