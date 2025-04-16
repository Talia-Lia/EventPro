// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";



const getFriendlyError = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Try logging in.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/missing-email":
      return "Email is required.";
    case "auth/internal-error":
      return "Something went wrong. Please try again.";
    default:
      return "An unexpected error occurred. Try again.";
  }
};

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    setError(""); //clears previous error 
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert("Signup successful! Please check your email to verify your account.");
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      setError(getFriendlyError(error.code)); // put error message on page
    } finally {
    setLoading(false);
    }
  };
  
  return (
    <div
      style={{
        margin: "20px auto", // center horizontally
        backgroundColor: "#FFF7E0",  // Light yellow background
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "400px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#FF8C00", textAlign: "center" }}>Sign Up</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
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
   required />
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
    <div style={{ marginBottom: "10px" }}>
    <label htmlFor="confirmPassword" style={{ fontWeight: "bold", color: "#444" }}>
      Confirm Password:
    </label>
    <br />
    <input
      id="confirmPassword"
      type="password"
      placeholder="Re-enter password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
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
  <button
    type="submit"
    disabled={loading}
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
  {loading ? "Loading..." : "Sign Up"}
  </button>
  {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
</form> 
</div>
)
}
export default Signup; 
