import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img src="logo.png" alt="ResQWave   Logo" style={styles.logoImage} />
      </div>
      <h1 style={styles.heading}>ResQWave</h1>
      <p style={styles.description}>Your partner in safety education.</p>

      <div style={styles.roleSelection}>
        <button style={styles.roleButton}>Student</button>
        <button style={styles.roleButton}>Teacher / Admin</button>
        <button style={styles.roleButton}>Parent</button>
      </div>

      <p style={styles.terms}>
        By continuing, you agree to our{" "}
        <a href="#" style={styles.link}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" style={styles.link}>
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    marginBottom: "20px",
  },
  logoImage: {
    width: "50px",
    height: "50px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#5f6368",
    marginBottom: "30px",
  },
  roleSelection: {
    marginBottom: "20px",
  },
  roleButton: {
    display: "block",
    width: "200px",
    margin: "10px auto",
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  roleButtonHover: {
    backgroundColor: "#0056b3",
  },
  terms: {
    fontSize: "14px",
    color: "#5f6368",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
  },
};

export default App;
