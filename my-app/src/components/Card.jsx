import React from 'react';

export default function Card({ children, style }) {
  return (
    <div
      style={{
        backgroundColor: '#fffdf8',
        border: '1px solid #d4a843',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
