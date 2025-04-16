// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const getFriendlyLoginError = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Try again later.";
    case "auth/internal-error":
      return "Something went wrong. Please try again.";
    default:
      return "An unexpected error occurred. Try again.";
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError(getFriendlyLoginError(error.code));
    }
  };

  return (
    <div
      style={{
        margin: "20px auto",        // same horizontal centering & top/bottom margin as Signup
        backgroundColor: "#FFF7E0", // same light-yellow background
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "400px",          // same width as Signup
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#FF8C00", textAlign: "center" }}>Login</h2>

      <form onSubmit={handleLogin} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold", color: "#444" }}>
            Email:
          </label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "5px",
              color: "black",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={{ fontWeight: "bold", color: "#444" }}>
            Password:
          </label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="Enter a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "5px",
              color: "black",
            }}
          />
        </div>
        {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          {error}
        </p>
        )}

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFA500",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
