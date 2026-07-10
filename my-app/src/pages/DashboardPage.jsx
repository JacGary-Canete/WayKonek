/**
 * DashboardPage.jsx
 *
 * FULLY SELF-CONTAINED STATIC UI VERSION
 * No external imports (no theme, no Sidebar, no Card components needed).
 */

export default function DashboardPage() {
  const userName = 'Juan Dela Cruz';

  const devices = [
    { id: 1, brand: 'HP', model: 'Victus', mac: 'A1:B2:C3:D4:E5:F6', status: 'APPROVED' },
    { id: 2, brand: 'Apple', model: 'iPhone 13', mac: 'F6:E5:D4:C3:B2:A1', status: 'PENDING' },
  ];

  const totalGb = 5.0;
  const usedGb = 3.5;
  const remainingGb = (totalGb - usedGb).toFixed(1);
  const usedPct = Math.round((usedGb / totalGb) * 100);

  const recentActivity = [
    { time: 'Just now', event: 'Dashboard loaded', details: 'Showing sample layout data' },
    { time: 'Today', event: 'Bandwidth cap', details: `${totalGb} GB monthly limit` },
  ];

  const COLORS = {
    maroonDark: '#3D0808',
    maroonMedium: '#5C1010',
    maroonLight: '#7A1818',
    goldPrimary: '#D4A843',
    goldLight: '#E8C976',
    goldBorder: 'rgba(212,168,67,0.3)',
    textGold: '#E8C976',
    mutedGold: 'rgba(232,201,118,0.7)',
    bgSection: '#1A1A1A',
    textHeading: '#FFFFFF',
    textBody: '#EAEAEA',
    textMuted: '#A0A0A0',
  };

  const statusBadge = (status) => ({
    padding: '3px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold',
    backgroundColor:
      status === 'APPROVED' ? 'rgba(76,175,80,0.15)'  :
      status === 'PENDING'  ? 'rgba(255,193,7,0.15)'  :
                              'rgba(244,67,54,0.15)',
    color:
      status === 'APPROVED' ? '#4CAF50' :
      status === 'PENDING'  ? '#FFC107' :
                              '#F44336',
    border: `1px solid ${
      status === 'APPROVED' ? 'rgba(76,175,80,0.4)'  :
      status === 'PENDING'  ? 'rgba(255,193,7,0.4)'  :
                              'rgba(244,67,54,0.4)'}`,
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: COLORS.maroonDark, fontFamily: 'Arial, sans-serif' }}>

      {/* ── Sidebar (placeholder, no component yet) ── */}
      <div style={{
        width: '220px', backgroundColor: COLORS.maroonDark,
        borderRight: `2px solid ${COLORS.goldBorder}`, padding: '24px 16px',
        color: COLORS.textGold,
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>WayKonek</div>
        <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📊 Dashboard</div>
        <div style={{ marginBottom: '12px', opacity: 0.7 }}>📶 Wi-Fi Registration</div>
        <div style={{ marginBottom: '12px', opacity: 0.7 }}>💻 My Devices</div>
        <div style={{ marginBottom: '12px', opacity: 0.7 }}>📈 Bandwidth Monitor</div>
        <div style={{ marginBottom: '12px', opacity: 0.7 }}>👤 My Account</div>
      </div>

      {/* ── Main ── */}
      <div style={{ flex: 1, overflowY: 'auto', backgroundColor: COLORS.bgSection }}>

        <header style={{
          backgroundColor: COLORS.maroonDark,
          borderBottom: `2px solid ${COLORS.goldBorder}`,
          padding: '16px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>📶</span>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.textGold }}>
                CITU-Bandwidth Monitoring System
              </div>
              <div style={{ fontSize: '12px', color: COLORS.mutedGold, marginTop: '1px' }}>
                Network: CITU-WIFI
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              backgroundColor: 'rgba(212,168,67,0.08)',
              border: `1px solid ${COLORS.goldBorder}`,
              borderRadius: '10px', padding: '8px 18px',
            }}>
              <div>
                <div style={{ fontSize: '10px', color: COLORS.mutedGold }}>Current Usage</div>
                <div style={{ fontSize: '15px', fontWeight: 'bold', color: COLORS.textGold }}>{usedGb} GB</div>
              </div>
              <div style={{ width: '1px', height: '28px', backgroundColor: COLORS.goldBorder }} />
              <div>
                <div style={{ fontSize: '10px', color: COLORS.mutedGold }}>Remaining</div>
                <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#4CAF50' }}>{remainingGb} GB</div>
              </div>
              <div style={{ width: '1px', height: '28px', backgroundColor: COLORS.goldBorder }} />
              <div style={{ fontSize: '11px', color: '#4CAF50' }}>● Active</div>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: COLORS.textGold }}>
              {userName}
            </span>
          </div>
        </header>

        <main style={{ padding: '32px 40px' }}>

          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '4px' }}>
              Welcome back, {userName} 👋
            </h2>
            <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>
              Devices Registered:&nbsp;
              <strong style={{ color: COLORS.textBody }}>{devices.length} / 2</strong>
            </p>
          </div>

          {/* Bandwidth Progress Card */}
          <div style={{
            marginBottom: '24px', padding: '24px', borderRadius: '12px',
            background: `linear-gradient(135deg, ${COLORS.maroonMedium} 0%, ${COLORS.maroonLight} 100%)`,
            border: `1px solid ${COLORS.goldBorder}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '13px', color: COLORS.mutedGold, marginBottom: '4px' }}>
                  Monthly Bandwidth Usage
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.textGold }}>
                  {usedGb} <span style={{ fontSize: '14px' }}>GB</span>
                  <span style={{ fontSize: '16px', color: COLORS.mutedGold }}> of {totalGb} GB</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', color: '#4CAF50' }}>● Connected to CITU-WIFI</div>
                <div style={{ fontSize: '12px', color: COLORS.mutedGold, marginTop: '2px' }}>Resets in 14 days</div>
              </div>
            </div>
            <div style={{ width: '100%', height: '10px', backgroundColor: 'rgba(61,8,8,0.6)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{
                width: `${usedPct}%`, height: '100%',
                background: `linear-gradient(90deg, ${COLORS.goldPrimary}, ${COLORS.goldLight})`,
                borderRadius: '5px',
              }} />
            </div>
            <p style={{ fontSize: '12px', color: COLORS.mutedGold, marginTop: '6px', marginBottom: 0 }}>
              {usedPct}% used · {remainingGb} GB remaining
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
            <button style={{
              flex: 1, padding: '16px', borderRadius: '10px',
              border: 'none', cursor: 'default',
              backgroundColor: COLORS.goldPrimary,
              color: COLORS.maroonDark,
              fontWeight: 'bold', fontSize: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              ➕ Register New Device
            </button>

            <button style={{
              flex: 1, padding: '16px', borderRadius: '10px',
              cursor: 'default',
              backgroundColor: 'transparent',
              color: COLORS.textGold,
              border: `2px solid ${COLORS.goldPrimary}`,
              fontWeight: 'bold', fontSize: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              📊 View Bandwidth
            </button>
          </div>

          {/* My Devices */}
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '16px' }}>
            My Devices
          </h3>
          <div style={{
            marginBottom: '28px', borderRadius: '12px', overflow: 'hidden',
            border: `1px solid ${COLORS.goldBorder}`, backgroundColor: COLORS.maroonMedium,
          }}>
            {devices.map((device, idx) => (
              <div key={device.id} style={{
                padding: '16px 24px',
                borderBottom: idx < devices.length - 1 ? `1px solid ${COLORS.goldBorder}` : 'none',
                display: 'flex', alignItems: 'center', gap: '16px',
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  backgroundColor: 'rgba(212,168,67,0.1)',
                  border: `1px solid ${COLORS.goldBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                }}>
                  {device.brand === 'Apple' ? '📱' : '💻'}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: COLORS.textBody }}>
                    {device.brand} {device.model}
                  </div>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted }}>
                    MAC: {device.mac}
                  </div>
                </div>

                <span style={statusBadge(device.status)}>{device.status}</span>
              </div>
            ))}

            <div style={{ padding: '14px 24px', textAlign: 'center', borderTop: `1px solid ${COLORS.goldBorder}` }}>
              <span style={{ color: COLORS.textGold, fontSize: '13px', textDecoration: 'underline' }}>
                + Add another device
              </span>
            </div>
          </div>

          {/* Recent Activity */}
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '16px' }}>
            Recent Activity
          </h3>
          <div style={{
            borderRadius: '12px', overflow: 'hidden',
            border: `1px solid ${COLORS.goldBorder}`, backgroundColor: COLORS.maroonMedium,
          }}>
            {recentActivity.map((item, idx) => (
              <div key={idx} style={{
                padding: '16px 24px',
                borderBottom: idx < recentActivity.length - 1 ? `1px solid ${COLORS.goldBorder}` : 'none',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: COLORS.goldPrimary,
                  marginTop: '6px', flexShrink: 0,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: COLORS.textBody }}>
                      {item.event}
                    </span>
                    <span style={{ fontSize: '11px', color: COLORS.textMuted }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: COLORS.textMuted, margin: 0 }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}