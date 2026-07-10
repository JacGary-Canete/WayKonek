/**
 * AboutPage — standalone about page matching LandingPage's style
 *
 * Hero, mission & vision, problem stats, timeline, team, and tech stack.
 * Includes its own navbar and footer. No external component imports —
 * everything needed to render is self-contained in this file.
 */

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
  bgSection: '#f1ece2',
  textHeading: '#2c2c2a',
  textBody: '#5f5e5a',
  textMuted: '#9a978f',
};

const FONTS = {
  primary: "'Segoe UI', system-ui, sans-serif",
  mono: "'Consolas', 'Courier New', monospace",
};

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  border: '1px solid #e5e0d8',
  padding: '32px 24px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

export default function AboutPage({ onNavigate }) {
  const navigate = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const navLinks = [
    { label: 'Home', page: 'landing' },
    { label: 'Features', page: 'features' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const problems = [
    { stat: '60%', desc: 'Average speed reduction during peak hours' },
    { stat: '4,000+', desc: 'Students affected by network congestion daily' },
    { stat: '₱2M+', desc: 'Annual cost of network inefficiencies' },
  ];

  const timeline = [
    { year: '2024', title: 'Problem Identified', desc: 'Network congestion and bandwidth abuse became critical at CITU' },
    { year: '2025', title: 'WayKonek Proposed', desc: 'Development of intelligent bandwidth management system approved' },
    { year: '2025', title: 'System Launched', desc: 'WayKonek deployed successfully, serving 12,000+ users' },
  ];

  const team = [
    {
      icon: '👨‍💻',
      name: 'Judd Kristoffer Mayuela',
      role: 'Lead Developer',
      desc: 'Responsible for system architecture, backend integration, and core functionality development.',
    },
    {
      icon: '🎨',
      name: 'Bryne Kendrick P. Nuñez',
      role: 'UI/UX Developer',
      desc: 'Designed user interfaces, user experience flows, and visual identity of WayKonek.',
    },
  ];

  const techStack = ['ReactJS', 'Vite', 'JavaScript', 'CSS-in-JS', 'REST API', 'MySQL'];

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
          <div style={{ display: 'flex', gap: '28px' }}>
            {navLinks.map((link) => (
              <span
                key={link.page}
                onClick={() => navigate(link.page)}
                style={{ color: COLORS.white, fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}
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
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: COLORS.goldPrimary, marginBottom: '16px' }}>
          About WayKonek
        </h1>
        <p style={{ fontSize: '20px', color: COLORS.white, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Revolutionizing campus network management at Cebu Institute of Technology – University
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '80px 40px', backgroundColor: COLORS.bgPage }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '16px' }}>
              🎯 Our Mission
            </h2>
            <p style={{ fontSize: '16px', color: COLORS.textBody, lineHeight: '1.8' }}>
              To provide intelligent bandwidth management solutions that ensure fair, efficient, and reliable network access
              for every member of the CITU community, empowering education through seamless connectivity.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '16px' }}>
              👁️ Our Vision
            </h2>
            <p style={{ fontSize: '16px', color: COLORS.textBody, lineHeight: '1.8' }}>
              To become the leading campus network management system in the Philippines, setting the standard for
              equitable bandwidth distribution and real-time network monitoring in educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section style={{ padding: '80px 40px', backgroundColor: COLORS.bgSection }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '60px' }}>
          The Problem We Solve
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          {problems.map((item, idx) => (
            <div key={idx} style={{ ...cardStyle, backgroundColor: COLORS.bgSection, textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: COLORS.maroonLight, marginBottom: '12px' }}>
                {item.stat}
              </div>
              <p style={{ fontSize: '16px', color: COLORS.textBody, lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 40px', backgroundColor: COLORS.bgPage }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '60px' }}>
          Our Journey
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: COLORS.goldBorder,
              transform: 'translateX(-50%)',
            }}
          />
          {timeline.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', marginBottom: '40px', position: 'relative', alignItems: 'center' }}>
              <div
                style={{
                  flex: idx % 2 === 0 ? 1 : 'none',
                  textAlign: idx % 2 === 0 ? 'right' : 'left',
                  paddingRight: idx % 2 === 0 ? '60px' : 0,
                  paddingLeft: idx % 2 === 0 ? 0 : '60px',
                  marginLeft: idx % 2 === 0 ? 0 : '50%',
                }}
              >
                <div style={cardStyle}>
                  <div style={{ fontSize: '14px', color: COLORS.textMuted, fontFamily: FONTS.mono, marginBottom: '8px' }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: COLORS.textBody, lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.goldPrimary,
                  border: `4px solid ${COLORS.maroonDark}`,
                  zIndex: 1,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 40px', backgroundColor: COLORS.bgSection }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '60px' }}>
          Meet the Team
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ ...cardStyle, textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>{member.icon}</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '8px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '14px', color: COLORS.maroonLight, marginBottom: '12px', fontWeight: 'bold' }}>
                {member.role}
              </p>
              <p style={{ fontSize: '14px', color: COLORS.textBody, lineHeight: '1.6' }}>
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '80px 40px', backgroundColor: COLORS.bgPage }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '60px' }}>
          Technology Stack
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {techStack.map((tech, idx) => (
            <div key={idx} style={{ ...cardStyle, textAlign: 'center', padding: '20px', backgroundColor: COLORS.bgSection }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.textHeading }}>
                {tech}
              </div>
            </div>
          ))}
        </div>
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
