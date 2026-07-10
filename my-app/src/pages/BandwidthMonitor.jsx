import React from 'react';

export default function BandwidthMonitor() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <header style={styles.header}>
          <h1 style={styles.title}>Bandwidth Monitor</h1>
          <p style={styles.subtitle}>Static preview of the bandwidth page</p>
        </header>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Monthly Data Cap</h2>
          <p style={styles.bigText}>3.2 GB of 5 GB</p>
          <p style={styles.text}>This page is intentionally static and does not include live data or interactive features.</p>
        </section>

        <section style={styles.grid}>
          <div style={styles.cardSmall}>
            <h3 style={styles.cardTitle}>Download</h3>
            <p style={styles.metric}>24.6 Mbps</p>
          </div>
          <div style={styles.cardSmall}>
            <h3 style={styles.cardTitle}>Upload</h3>
            <p style={styles.metric}>8.3 Mbps</p>
          </div>
          <div style={styles.cardSmall}>
            <h3 style={styles.cardTitle}>Ping</h3>
            <p style={styles.metric}>12 ms</p>
          </div>
          <div style={styles.cardSmall}>
            <h3 style={styles.cardTitle}>Devices</h3>
            <p style={styles.metric}>3 Active</p>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#4d0d12',
    color: '#f8f4e8',
    fontFamily: 'Arial, sans-serif',
  },
  main: {
    flex: 1,
    padding: '32px',
    backgroundColor: '#f5efe5',
    color: '#2f1d1d',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: '0 0 6px',
    fontSize: '28px',
    color: '#4d0d12',
  },
  subtitle: {
    margin: 0,
    color: '#7a6a61',
  },
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #6b1520 0%, #8a2230 100%)',
    color: '#fff',
    marginBottom: '24px',
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
  },
  cardTitle: {
    margin: '0 0 8px',
    fontSize: '16px',
    color: '#f3cf78',
  },
  bigText: {
    margin: '0 0 8px',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  text: {
    margin: 0,
    color: '#f0d7a3',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '16px',
  },
  cardSmall: {
    padding: '20px',
    borderRadius: '14px',
    backgroundColor: '#fff',
    border: '1px solid #d4a843',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.08)',
  },
  metric: {
    margin: 0,
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#4d0d12',
  },
};