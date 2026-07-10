/**
 * MyAccount UI (standalone)
 *
 * Account management page: profile info, password change, and
 * notification preferences. No imports from authService, userService,
 * DashboardSidebar, Card, or theme constants — everything needed to
 * render is self-contained in this file. API calls are replaced with
 * local mock state so it can be dropped in and previewed on its own.
 */

import { useState } from 'react';

const COLORS = {
  maroonDark: '#4a0e1a',
  maroonMedium: '#6b1220',
  maroonLight: '#8a1a2b',
  goldPrimary: '#f0c85a',
  goldLight: '#f5d87a',
  goldBorder: '#a9803a',
  mutedGold: '#d9b877',
  white: '#f5eadf',
  bgSection: '#f1ece2',
  textHeading: '#2c2c2a',
  textBody: '#5f5e5a',
  textMuted: '#9a978f',
};

const FONTS = {
  primary: "'Segoe UI', system-ui, sans-serif",
};

// Simple card wrapper, replacing the external <Card> component
function Card({ children, style }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '12px',
        border: '1px solid #e5e0d8',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function MyAccountUI() {
  const userName = 'Vince Raymund';

  const [activeMenu, setActiveMenu] = useState('my-account');
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const [profile, setProfile] = useState({
    firstName: 'Vince',
    lastName: 'Jalerta',
    email: 'vinceraymundjalerta@gmail.com',
    studentId: '22-1234-567',
    course: 'BS Computer Science',
    year: '3rd Year',
    contactNumber: '09171234567',
  });

  const [profileDraft, setProfileDraft] = useState({ ...profile });

  const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' });

  const [notifications, setNotifications] = useState({
    bandwidthAlerts: true,
    deviceConnects: true,
    systemUpdates: false,
    loginAlerts: true,
  });

  const notificationLabels = {
    bandwidthAlerts: { label: 'Bandwidth Alerts', desc: 'Notify when you reach 80% of your daily allocation' },
    deviceConnects: { label: 'Device Connections', desc: 'Notify when a new device connects to your account' },
    systemUpdates: { label: 'System Updates', desc: 'Receive notifications about system maintenance and updates' },
    loginAlerts: { label: 'Login Alerts', desc: 'Notify on successful logins to your account' },
  };

  const handleMenuNavigate = (key) => setActiveMenu(key);

  const handleProfileSave = () => {
    setSavingProfile(true);
    setTimeout(() => {
      setProfile({ ...profileDraft });
      setEditingProfile(false);
      setSavingProfile(false);
      setSuccessMsg('Profile updated successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 600);
  };

  const handleProfileCancel = () => {
    setProfileDraft({ ...profile });
    setEditingProfile(false);
  };

  const handlePasswordSave = () => {
    if (passwords.newPass !== passwords.confirm) {
      alert('New passwords do not match.');
      return;
    }
    setSavingPassword(true);
    setTimeout(() => {
      setPasswords({ current: '', newPass: '', confirm: '' });
      setEditingPassword(false);
      setSavingPassword(false);
      setSuccessMsg('Password changed successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 600);
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    backgroundColor: 'rgba(61,8,8,0.5)',
    border: `1px solid ${COLORS.goldBorder}`,
    borderRadius: '8px',
    color: '#fff',
    fontFamily: FONTS.primary,
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontSize: '12px',
    color: COLORS.maroonMedium,
    fontFamily: FONTS.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '6px',
    display: 'block',
  };

  const valueStyle = {
    fontSize: '15px',
    color: COLORS.maroonDark,
    fontFamily: FONTS.primary,
    padding: '10px 0',
    borderBottom: '1px solid rgba(212,168,67,0.15)',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.maroonDark, fontFamily: FONTS.primary }}>
      <style>{`
        .account-input::placeholder { color: rgba(255,255,255,0.7); }
        .account-input { color: #ffffff; }

        /* From Uiverse.io by alexruix */
        .switch {
          font-size: 17px;
          position: relative;
          display: inline-block;
          width: 3.5em;
          height: 2em;
          flex-shrink: 0;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #B0B0B0;
          border: 1px solid #B0B0B0;
          transition: .4s;
          border-radius: 32px;
          outline: none;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          outline: 2px solid #B0B0B0;
          left: -1px;
          bottom: -1px;
          background-color: #fff;
          transition: transform .25s ease-in-out 0s;
        }
        .slider-icon {
          opacity: 0;
          height: 12px;
          width: 12px;
          stroke-width: 8;
          position: absolute;
          z-index: 999;
          stroke: #222222;
          right: 60%;
          top: 30%;
          transition: right ease-in-out .3s, opacity ease-in-out .15s;
        }
        input:checked + .slider {
          background-color: #f0c85a;
        }
        input:checked + .slider .slider-icon {
          opacity: 1;
          right: 20%;
        }
        input:checked + .slider:before {
          transform: translateX(1.5em);
          outline-color: #f0c85a;
        }

        /* From Uiverse.io by adamgiebl (adapted) */
        .btn-outline {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
          text-decoration: none;
          color: #f0c85a;
          background: transparent;
          cursor: pointer;
          transition: ease-out 0.5s;
          border: 2px solid #f0c85a;
          border-radius: 10px;
          box-shadow: inset 0 0 0 0 #f0c85a;
          font-family: inherit;
        }
        .btn-outline:hover {
          color: #4a0e1a;
          box-shadow: inset 0 -100px 0 0 #f0c85a;
        }
        .btn-outline:active {
          transform: scale(0.9);
        }
        .btn-outline:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* From Uiverse.io by Mubashir222 (adapted) */
        .btn-cancel {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 28px;
          overflow: hidden;
          letter-spacing: -0.02em;
          color: white;
          background-color: #1f2937;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-cancel-fill {
          position: absolute;
          width: 0;
          height: 0;
          transition: all 0.5s ease-out;
          background-color: #f0c85a;
          border-radius: 9999px;
        }
        .btn-cancel:hover .btn-cancel-fill {
          width: 14rem;
          height: 14rem;
        }
        .btn-cancel-corner-left,
        .btn-cancel-corner-right {
          position: absolute;
          height: 100%;
        }
        .btn-cancel-corner-left {
          bottom: 0;
          left: 0;
          margin-left: -0.5rem;
        }
        .btn-cancel-corner-right {
          top: 0;
          right: 0;
          width: 3rem;
          margin-right: -0.75rem;
        }
        .btn-cancel-sheen {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin-top: -0.25rem;
          border-radius: 8px;
          opacity: 0.3;
          background: linear-gradient(to bottom, transparent, transparent, #e5e7eb);
        }
        .btn-cancel-label {
          position: relative;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .btn-cancel:hover .btn-cancel-label {
          color: #4a0e1a;
        }

        /* From Uiverse.io by cssbuttons-io (adapted) */
        .btn-delete {
          position: relative;
          width: 150px;
          height: 44px;
          cursor: pointer;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 8px;
          box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
          background: #e62222;
          overflow: hidden;
          font-family: inherit;
        }
        .btn-delete,
        .btn-delete .btn-delete-text,
        .btn-delete .btn-delete-icon {
          transition: 200ms;
        }
        .btn-delete .btn-delete-text {
          transform: translateX(35px);
          color: white;
          font-weight: bold;
          font-size: 14px;
        }
        .btn-delete .btn-delete-icon {
          position: absolute;
          border-left: 1px solid #c41b1b;
          transform: translateX(110px);
          height: 34px;
          width: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-delete svg {
          width: 13px;
          fill: #eee;
        }
        .btn-delete:hover {
          background: #ff3636;
        }
        .btn-delete:hover .btn-delete-text {
          color: transparent;
        }
        .btn-delete:hover .btn-delete-icon {
          width: 150px;
          border-left: none;
          transform: translateX(0);
        }
        .btn-delete:active .btn-delete-icon svg {
          transform: scale(0.8);
        }
      `}</style>

      <div style={{ backgroundColor: COLORS.bgSection, minHeight: '100vh' }}>
        {/* Top Header */}
        <header
          style={{
            backgroundColor: COLORS.maroonDark,
            borderBottom: `2px solid ${COLORS.goldBorder}`,
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>📶</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.goldPrimary }}>WayKonek</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '14px', color: COLORS.mutedGold }}>Welcome back,</span>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: COLORS.goldPrimary }}>{userName}</span>
          </div>
        </header>

        <main style={{ padding: '40px' }}>
          {/* Profile Banner */}
          <Card style={{
            marginBottom: '32px',
            background: `linear-gradient(135deg, ${COLORS.maroonMedium} 0%, ${COLORS.maroonLight} 100%)`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${COLORS.goldPrimary}, ${COLORS.goldLight})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: COLORS.maroonDark,
                  flexShrink: 0,
                  border: `3px solid ${COLORS.goldPrimary}`,
                }}
              >
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
              </div>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.goldPrimary, marginBottom: '4px' }}>
                  {profile.firstName} {profile.lastName}
                </h2>
                <p style={{ fontSize: '14px', color: COLORS.white, margin: '0 0 2px 0' }}>
                  {profile.course} · {profile.year}
                </p>
                <p style={{ fontSize: '13px', color: COLORS.mutedGold, margin: 0 }}>
                  Student ID: {profile.studentId}
                </p>
              </div>
            </div>
          </Card>

          {successMsg && (
            <div
              style={{
                marginBottom: '24px',
                padding: '14px 20px',
                backgroundColor: 'rgba(76,175,80,0.15)',
                border: '1px solid #4CAF50',
                borderRadius: '10px',
                color: '#4CAF50',
                fontSize: '14px',
              }}
            >
              ✅ {successMsg}
            </div>
          )}

          {/* Profile Information */}
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '20px' }}>
            Profile Information
          </h3>
          <Card style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.textHeading, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                Personal Details
              </span>
              {!editingProfile ? (
                <button className="btn-outline" onClick={() => setEditingProfile(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-cancel" onClick={handleProfileCancel}>
                    <span className="btn-cancel-fill" />
                    <span className="btn-cancel-corner-left">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487" style={{ height: '100%', width: 'auto' }}>
                        <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
                      </svg>
                    </span>
                    <span className="btn-cancel-corner-right">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487" style={{ width: '100%', height: '100%' }}>
                        <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
                      </svg>
                    </span>
                    <span className="btn-cancel-sheen" />
                    <span className="btn-cancel-label">Cancel</span>
                  </button>
                  <button className="btn-outline" onClick={handleProfileSave} disabled={savingProfile}>
                    {savingProfile ? 'Saving…' : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15.8787 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V8.12132C21 7.66475 21 7.43646 20.9758 7.2174C20.8924 6.4633 20.5963 5.74846 20.122 5.15629C19.9843 4.98427 19.8228 4.82285 19.5 4.5C19.1772 4.17715 19.0157 4.01573 18.8437 3.87795C18.2515 3.40366 17.5367 3.10757 16.7826 3.02421C16.5635 3 16.3353 3 15.8787 3Z" />
                          <path d="M17 3.5V4C17 5.88562 17 6.82843 16.4142 7.41421C15.8284 8 14.8856 8 13 8H11C9.11438 8 8.17157 8 7.58579 7.41421C7 6.82843 7 5.88562 7 4V3.5" />
                          <path d="M17 20.5V17C17 15.1144 17 14.1716 16.4142 13.5858C15.8284 13 14.8856 13 13 13H11C9.11438 13 8.17157 13 7.58579 13.5858C7 14.1716 7 15.1144 7 17V20.5" />
                        </svg>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                { field: 'firstName', label: 'First Name' },
                { field: 'lastName', label: 'Last Name' },
                { field: 'email', label: 'Email Address' },
                { field: 'studentId', label: 'Student ID', readOnly: true },
                { field: 'course', label: 'Course' },
                { field: 'year', label: 'Year Level' },
                { field: 'contactNumber', label: 'Contact Number' },
              ].map(({ field, label, readOnly }) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  {editingProfile && !readOnly ? (
                    <input
                      style={inputStyle}
                      value={profileDraft[field]}
                      onChange={(e) => setProfileDraft((prev) => ({ ...prev, [field]: e.target.value }))}
                    />
                  ) : (
                    <div style={valueStyle}>{profile[field] || '—'}</div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Change Password */}
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '20px' }}>
            Security
          </h3>
          <Card style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.textHeading, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
                Change Password
              </span>
              {!editingPassword ? (
                <button className="btn-outline" onClick={() => setEditingPassword(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                  </svg>
                  Change Password
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    className="btn-cancel"
                    onClick={() => { setEditingPassword(false); setPasswords({ current: '', newPass: '', confirm: '' }); }}
                  >
                    <span className="btn-cancel-fill" />
                    <span className="btn-cancel-corner-left">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487" style={{ height: '100%', width: 'auto' }}>
                        <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
                      </svg>
                    </span>
                    <span className="btn-cancel-corner-right">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487" style={{ width: '100%', height: '100%' }}>
                        <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
                      </svg>
                    </span>
                    <span className="btn-cancel-sheen" />
                    <span className="btn-cancel-label">Cancel</span>
                  </button>
                  <button className="btn-outline" onClick={handlePasswordSave} disabled={savingPassword}>
                    {savingPassword ? 'Saving…' : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15.8787 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V8.12132C21 7.66475 21 7.43646 20.9758 7.2174C20.8924 6.4633 20.5963 5.74846 20.122 5.15629C19.9843 4.98427 19.8228 4.82285 19.5 4.5C19.1772 4.17715 19.0157 4.01573 18.8437 3.87795C18.2515 3.40366 17.5367 3.10757 16.7826 3.02421C16.5635 3 16.3353 3 15.8787 3Z" />
                          <path d="M17 3.5V4C17 5.88562 17 6.82843 16.4142 7.41421C15.8284 8 14.8856 8 13 8H11C9.11438 8 8.17157 8 7.58579 7.41421C7 6.82843 7 5.88562 7 4V3.5" />
                          <path d="M17 20.5V17C17 15.1144 17 14.1716 16.4142 13.5858C15.8284 13 14.8856 13 13 13H11C9.11438 13 8.17157 13 7.58579 13.5858C7 14.1716 7 15.1144 7 17V20.5" />
                        </svg>
                        Update Password
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {!editingPassword ? (
              <p style={{ fontSize: '14px', color: COLORS.textBody, margin: 0 }}>
                Your password was last changed 30 days ago. We recommend updating it regularly to keep your account secure.
              </p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Current Password</label>
                  <input
                    type="password"
                    style={inputStyle}
                    className="account-input"
                    value={passwords.current}
                    placeholder="Enter current password"
                    onChange={(e) => setPasswords((p) => ({ ...p, current: e.target.value }))}
                  />
                </div>
                <div>
                  <label style={labelStyle}>New Password</label>
                  <input
                    type="password"
                    style={inputStyle}
                    className="account-input"
                    value={passwords.newPass}
                    placeholder="Enter new password"
                    onChange={(e) => setPasswords((p) => ({ ...p, newPass: e.target.value }))}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Confirm New Password</label>
                  <input
                    type="password"
                    style={inputStyle}
                    className="account-input"
                    value={passwords.confirm}
                    placeholder="Confirm new password"
                    onChange={(e) => setPasswords((p) => ({ ...p, confirm: e.target.value }))}
                  />
                </div>
              </div>
            )}
          </Card>

          {/* Notification Preferences */}
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '20px' }}>
            Notification Preferences
          </h3>
          <Card style={{ padding: '0' }}>
            {Object.entries(notificationLabels).map(([key, { label, desc }], idx, arr) => (
              <div
                key={key}
                style={{
                  padding: '20px 24px',
                  borderBottom: idx < arr.length - 1 ? `1px solid ${COLORS.goldBorder}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', color: COLORS.textBody, marginBottom: '4px' }}>
                    {label}
                  </div>
                  <p style={{ fontSize: '13px', color: COLORS.textMuted, margin: 0, lineHeight: '1.5' }}>{desc}</p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications[key]}
                    onChange={() => toggleNotification(key)}
                  />
                  <span className="slider">
                    <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation">
                      <path fill="none" d="m4 16.5 8 8 16-16"></path>
                    </svg>
                  </span>
                </label>
              </div>
            ))}
          </Card>

          {/* Account Actions */}
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '20px', marginTop: '32px' }}>
            Account Actions
          </h3>
          <Card>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                Sign Out
              </button>
              <button className="btn-delete">
                <span className="btn-delete-text">Delete</span>
                <span className="btn-delete-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </span>
              </button>
            </div>
            <p style={{ fontSize: '13px', color: COLORS.textMuted, marginTop: '12px', marginBottom: 0 }}>
              Deleting your account is permanent and will remove all your data, registered devices, and usage history.
            </p>
          </Card>
        </main>
      </div>
    </div>
  );
}