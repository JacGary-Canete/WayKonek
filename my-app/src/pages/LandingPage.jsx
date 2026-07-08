export default function LandingPage({onNavigate}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#5a0b0b",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
     
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#d4a843",
            marginBottom: "20px",
          }}
        >
          WayKonekk
        </h1>

        <h2 style={{ marginBottom: "20px" }}>
          CITU Bandwidth Monitoring System
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 40px",
            fontSize: "18px",
          }}
        >
          A system for monitoring campus network bandwidth usage and ensuring
          fair internet access for students and staff.
        </p>

    <button
      onClick={() => onNavigate("register")}
      style={{
        padding: "15px 30px",
        marginRight: "15px",
        background: "#d4a843",
        color: "#5a0b0b",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Register
    </button>

        <button
          style={{
            padding: "15px 30px",
            background: "transparent",
            color: "#d4a843",
            border: "2px solid #d4a843",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "default",
          }}
        >
          Login
        </button>
      </section>

      {/* Features */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <h3>WiFi Registration</h3>
          <p>Register devices for campus WiFi access.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <h3>Bandwidth Monitoring</h3>
          <p>Monitor network usage in real time.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <h3>Reports</h3>
          <p>Generate reports for administrators.</p>
        </div>
      </section>
    </div>
  );
}