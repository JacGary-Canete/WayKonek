/**
 * LandingPage — full standalone website landing page
 *
 * Includes navbar, hero, stats bar, features grid, CTA banner, and footer.
 * No external component imports — everything is self-contained here.
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
  bgPage: '#faf8f5',
  textHeading: '#2c2c2a',
  textBody: '#5f5e5a',
};

const FONTS = {
  primary: "'Segoe UI', system-ui, sans-serif",
};

export default function LandingPage({ onNavigate }) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page) => {
    setMenuOpen(false);
    if (onNavigate) onNavigate(page);
  };

  const features = [
    { icon: '📶', title: 'WiFi Registration', desc: 'Quick and easy device registration for campus network access' },
    { icon: '📊', title: 'Real-Time Monitoring', desc: 'Track bandwidth usage and network performance in real-time' },
    { icon: '⚖️', title: 'Fair Usage Policy', desc: 'Ensure equitable bandwidth distribution across all users' },
    { icon: '📈', title: 'Detailed Reports', desc: 'Comprehensive analytics and usage reports for administrators' },
    { icon: '🔐', title: 'Admin Control Panel', desc: 'Full administrative control over network settings and policies' },
    { icon: '🔔', title: 'Instant Alerts', desc: 'Real-time notifications for network anomalies and threshold breaches' },
  ];

  const stats = [
    { value: '12,000+', label: 'Users' },
    { value: '98%', label: 'Uptime' },
    { value: '40 Gbps', label: 'Bandwidth' },
    { value: '3,200+', label: 'Devices' },
  ];

  const navLinks = [
    { label: 'Home', page: 'landing' },
    { label: 'Features', page: 'features' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: FONTS.primary }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: COLORS.maroonDark,
          borderBottom: `2px solid ${COLORS.goldBorder}`,
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('landing')}>
          <span style={{ fontSize: '22px' }}>📶</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.goldPrimary }}>WayKonek</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '28px' }}>
            {navLinks.map((link) => (
              <span
                key={link.page}
                onClick={() => navigate(link.page)}
                style={{
                  color: COLORS.white,
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </span>
            ))}
          </div>
          <button
            onClick={() => navigate('login')}
            style={{
              backgroundColor: COLORS.goldPrimary,
              color: COLORS.maroonDark,
              border: 'none',
              padding: '10px 22px',
              fontSize: '14px',
              fontWeight: 'bold',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.maroonMedium} 0%, ${COLORS.maroonLight} 100%)`,
          padding: '100px 40px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: COLORS.goldPrimary,
            marginBottom: '20px',
            lineHeight: '1.2',
          }}
        >
          WayKonek — Intelligent Bandwidth Management for CITU
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: COLORS.white,
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6',
          }}
        >
          Empowering Cebu Institute of Technology – University with smart network monitoring,
          fair bandwidth allocation, and seamless connectivity for over 12,000 users.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button
            onMouseEnter={() => setHoveredButton('get-started')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => navigate('login')}
            style={{
              backgroundColor: hoveredButton === 'get-started' ? COLORS.goldLight : COLORS.goldPrimary,
              color: COLORS.maroonDark,
              border: 'none',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'get-started' ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoveredButton === 'get-started' ? '0 6px 20px rgba(212,168,67,0.4)' : '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            Get Started →
          </button>
          <button
            onMouseEnter={() => setHoveredButton('learn-more')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => navigate('about')}
            style={{
              backgroundColor: hoveredButton === 'learn-more' ? COLORS.maroonLight : COLORS.maroonMedium,
              color: COLORS.goldPrimary,
              border: `2px solid ${COLORS.goldPrimary}`,
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'learn-more' ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          backgroundColor: COLORS.maroonDark,
          borderTop: `2px solid ${COLORS.goldBorder}`,
          borderBottom: `2px solid ${COLORS.goldBorder}`,
          padding: '30px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: COLORS.goldPrimary }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: COLORS.mutedGold, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 40px', flex: 1, backgroundColor: COLORS.bgPage }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: COLORS.textHeading,
            marginBottom: '60px',
          }}
        >
          Powerful Features
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e5e0d8',
                padding: '32px 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '12px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '14px', color: COLORS.textBody, lineHeight: '1.6' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.maroonMedium} 0%, ${COLORS.maroonLight} 100%)`,
          padding: '60px 40px',
          textAlign: 'center',
          borderTop: `2px solid ${COLORS.goldBorder}`,
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: COLORS.goldPrimary, marginBottom: '20px' }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '18px', color: COLORS.white, marginBottom: '30px' }}>
          Join thousands of CITU users enjoying optimized network connectivity
        </p>
        <button
          onMouseEnter={() => setHoveredButton('register')}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => navigate('login')}
          style={{
            backgroundColor: hoveredButton === 'register' ? COLORS.goldLight : COLORS.goldPrimary,
            color: COLORS.maroonDark,
            border: 'none',
            padding: '16px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredButton === 'register' ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hoveredButton === 'register' ? '0 6px 20px rgba(212,168,67,0.4)' : '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          Register Now
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: COLORS.maroonDark,
          padding: '40px 40px 24px',
          borderTop: `2px solid ${COLORS.goldBorder}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.goldPrimary, marginBottom: '8px' }}>
              WayKonek
            </div>
            <p style={{ fontSize: '13px', color: COLORS.mutedGold, maxWidth: '280px', lineHeight: '1.6' }}>
              Intelligent bandwidth management for Cebu Institute of Technology – University.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: COLORS.white, marginBottom: '10px' }}>Navigate</div>
              {navLinks.map((link) => (
                <div
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  style={{ fontSize: '13px', color: COLORS.mutedGold, marginBottom: '6px', cursor: 'pointer' }}
                >
                  {link.label}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: COLORS.white, marginBottom: '10px' }}>Contact</div>
              <div style={{ fontSize: '13px', color: COLORS.mutedGold, marginBottom: '6px' }}>support@waykonek.citu.edu</div>
              <div style={{ fontSize: '13px', color: COLORS.mutedGold }}>Cebu Institute of Technology – University</div>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: COLORS.mutedGold,
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: `1px solid ${COLORS.goldBorder}`,
          }}
        >
          © {new Date().getFullYear()} WayKonek. All rights reserved.
        </div>
      </footer>
    </div>
  );
}