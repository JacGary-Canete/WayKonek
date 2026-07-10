import React from 'react';

export default function MyAccountPage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Account</h1>
      <p style={styles.text}>This is a static account page preview.</p>
      <div style={styles.card}>
        <p><strong>Name:</strong> Juan Dela Cruz</p>
        <p><strong>Email:</strong> juan@example.com</p>
        <p><strong>Role:</strong> Student</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '32px',
    backgroundColor: '#f5efe5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#2f1d1d',
  },
  title: {
    marginBottom: '8px',
    color: '#4d0d12',
  },
  text: {
    marginBottom: '16px',
    color: '#7a6a61',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #d4a843',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.08)',
  },
};
