import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Defining the Signup functional component.
const Signup = () => {
  // Initializing the useNavigate hook to allow for navigation after signup.
  const navigate = useNavigate();
  
  // Setting up local state variables for email and password.
  // 'email' and 'password' store the current values of the respective input fields.
  // 'setEmail' and 'setPassword' are functions to update these values.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // The handleSubmit function is called when the form is submitted.
  // It prevents the default form submission behavior (which reloads the page)
  // and logs the current email and password to the console.
  // Increment 2: add additional logic here to send the data to server
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission.
    console.log("Signing up with:", { email, password });
  };

  // The component's render output.
  return (
   
    <div style={{ margin: "20px", color: "#000" }}>
      {/* A heading for the Signup page */}
      <h2>Sign Up</h2>

      {/* The form element which wraps the input fields and the submit button.
          It uses the handleSubmit function when submitted. */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        
        {/* Email input field group */}
        <div style={{ marginBottom: "10px" }}>
          {/* Label for the email input, associated via htmlFor attribute */}
          <label htmlFor="email">Email:</label>
          <br />
          {/* Email input field:
              - type="email" triggers email-specific validation and keyboard on mobile devices.
              - placeholder gives a hint to the user.
              - value is bound to the 'email' state variable.
              - onChange updates the state when the user types. */}
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Password input field group */}
        <div style={{ marginBottom: "10px" }}>
          {/* Label for the password input */}
          <label htmlFor="password">Password:</label>
          <br />
          {/* Password input field:
              - type="password" masks the input characters.
              - placeholder provides a hint.
              - value is bound to the 'password' state variable.
              - onChange updates the state with the current input. */}
          <input
            id="password"
            type="password"
            placeholder="Enter a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Submit button for the form.
            When clicked, the form's onSubmit event triggers handleSubmit. */}
        <button type="submit" style={{ padding: "8px 16px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Exporting the Signup component so it can be imported and used in other parts of the application.
export default Signup;
