import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import Card from '../components/Card';

const COLORS = {
  maroon: { dark: '#4b0000', card: '#6d1b1b' },
  gold: { primary: '#d4a843', border: '#d4a843' },
  bgSection: '#f8f5ef',
  bgInput: '#fffdf8',
  textHeading: '#5a2d0c',
  textBody: '#4b2e1b',
  textMuted: '#7a6f5b',
  text: { gold: '#f0c96b' },
};

const FONTS = {
  primary: 'Arial, sans-serif',
  mono: '"Courier New", monospace',
};

const DEVICE_BRANDS = [
  'Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo',
  'Huawei', 'Realme', 'Lenovo', 'Asus', 'HP',
  'Dell', 'Acer', 'Microsoft', 'Other',
];

function StepBar({ step }) {
  const steps = ['Device Info', 'Voucher', 'Verify', 'Connected'];
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
      {steps.map((label, i) => {
        const active = i + 1 === step;
        const done = i + 1 < step;
        return (
          <div key={label} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              height: '4px', borderRadius: '2px', marginBottom: '6px',
              backgroundColor: done || active ? COLORS.gold.primary : COLORS.gold.border,
            }} />
            <span style={{
              fontSize: '11px', fontFamily: FONTS.primary,
              color: done || active ? COLORS.gold.primary : COLORS.textMuted,
            }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <label style={{
      display: 'block', color: COLORS.textHeading,
      fontFamily: FONTS.primary, fontSize: '13px',
      fontWeight: 'bold', marginBottom: '6px',
    }}>
      {children}
    </label>
  );
}

function InfoBox({ children }) {
  return (
    <div style={{
      padding: '12px 16px', borderRadius: '8px',
      backgroundColor: 'rgba(212,168,67,0.07)',
      border: `1px solid ${COLORS.gold.border}`,
      fontSize: '13px', color: COLORS.textMuted,
      fontFamily: FONTS.primary, lineHeight: '1.6',
    }}>
      {children}
    </div>
  );
}

export default function WifiRegistrationPage({ onNavigate, onLogout, userName, userRole }) {
  const activeMenu = 'wifi-registration';
  const [step, setStep] = useState(1);

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: COLORS.bgInput,
    border: `2px solid ${COLORS.gold.border}`,
    borderRadius: '8px',
    color: COLORS.maroon.card,
    fontFamily: FONTS.mono,
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const btnPrimary = {
    width: '100%', padding: '13px',
    backgroundColor: COLORS.gold.primary,
    color: COLORS.maroon.dark, border: 'none',
    borderRadius: '8px', fontFamily: FONTS.primary,
    fontWeight: 'bold', fontSize: '15px',
    cursor: 'pointer',
  };

  const btnSecondary = {
    padding: '11px 24px', backgroundColor: 'transparent',
    color: COLORS.textMuted,
    border: `1px solid ${COLORS.gold.border}`,
    borderRadius: '8px', fontFamily: FONTS.primary,
    fontSize: '14px', cursor: 'pointer',
  };

  const handleNext = () => {
    setStep((current) => Math.min(current + 1, 4));
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: COLORS.maroon.dark }}>
        <DashboardSidebar
          activeKey={activeMenu}
          onNavigate={() => onNavigate?.('dashboard')}
          onLogout={onLogout}
          userName={userName}
          userRole={userRole}
        />

        <div style={{ flex: 1, overflowY: 'auto', backgroundColor: COLORS.bgSection }}>
          <header style={{
            backgroundColor: COLORS.maroon.dark,
            borderBottom: `2px solid ${COLORS.gold.border}`,
            padding: '18px 40px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            position: 'sticky', top: 0, zIndex: 100,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '26px' }}>📶</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.text.gold, fontFamily: FONTS.primary }}>
                WiFi Registration
              </span>
            </div>
            <span style={{ fontSize: '15px', fontWeight: 'bold', color: COLORS.text.gold, fontFamily: FONTS.primary }}>
              {userName}
            </span>
          </header>

          <main style={{ padding: '40px', maxWidth: '640px', margin: '0 auto' }}>
            <Card>
              <StepBar step={step} />

              {step === 1 && (
                <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, fontFamily: FONTS.primary, margin: '0 0 4px' }}>
                      Device Information
                    </h2>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted, fontFamily: FONTS.primary, margin: 0 }}>
                      Enter the brand and model of the device you want to connect to <strong>CITU-WIFI</strong>.
                    </p>
                  </div>

                  <div>
                    <FieldLabel>Device Brand</FieldLabel>
                    <select style={inputStyle}>
                      <option value="">— Select brand —</option>
                      {DEVICE_BRANDS.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <FieldLabel>Device Model</FieldLabel>
                    <input
                      type="text"
                      placeholder="e.g. iPhone 14, Galaxy S23, Vivobook 15"
                      style={inputStyle}
                    />
                  </div>

                  <InfoBox>
                    ℹ️ You may register up to <strong>2 devices</strong> per account.
                    Your <strong>1st device</strong> is registered immediately.
                    Your <strong>2nd device</strong> is sent to an admin for approval before it can connect.
                  </InfoBox>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="button" onClick={handleBack} style={btnSecondary}>← Back</button>
                    <button type="button" onClick={handleNext} style={btnPrimary}>Next: Enter Voucher →</button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, fontFamily: FONTS.primary, margin: '0 0 4px' }}>
                      Voucher Entry
                    </h2>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted, fontFamily: FONTS.primary, margin: 0 }}>
                      This is a static preview of the voucher section.
                    </p>
                  </div>
                  <InfoBox>
                    🎫 Voucher usage limit: <strong>2 devices per voucher</strong>.
                  </InfoBox>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="button" onClick={handleBack} style={btnSecondary}>← Back</button>
                    <button type="button" onClick={handleNext} style={btnPrimary}>Next: Review →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, fontFamily: FONTS.primary, margin: '0 0 4px' }}>
                      Review and Confirm
                    </h2>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted, fontFamily: FONTS.primary, margin: 0 }}>
                      This is a static preview of the review section.
                    </p>
                  </div>
                  <InfoBox>
                    ✅ Please review your selected device details before continuing.
                  </InfoBox>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="button" onClick={handleBack} style={btnSecondary}>← Back</button>
                    <button type="button" onClick={handleNext} style={btnPrimary}>Next: Connected →</button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, fontFamily: FONTS.primary, margin: '0 0 4px' }}>
                      Connected
                    </h2>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted, fontFamily: FONTS.primary, margin: 0 }}>
                      This is a static preview of the completion screen.
                    </p>
                  </div>
                  <InfoBox>
                    📶 Your device registration preview is complete.
                  </InfoBox>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button type="button" onClick={handleBack} style={btnSecondary}>← Back</button>
                  </div>
                </div>
              )}
            </Card>
          </main>
        </div>
      </div>
    </>
  );
}