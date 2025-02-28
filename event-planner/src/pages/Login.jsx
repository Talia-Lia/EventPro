// Importing React and the useState hook from the 'react' library.
// 'useState' allows us to create and manage local component state (like email/password values).
import React, { useState } from "react";

// Importing the useNavigate hook from 'react-router-dom'.
// This hook lets us navigate to different routes programmatically if needed.
import { useNavigate } from "react-router-dom";

// Defining a functional component named 'Login'.
const Login = () => {
  // useNavigate() returns a function we can use to navigate to different routes.
  // For example, we could use 'navigate("/some-route")' inside a handler.
  const navigate = useNavigate();
  
  // Creating local state variables for email and password using the useState hook.
  // 'email' and 'password' will store the current values of the inputs,
  // and 'setEmail' and 'setPassword' are functions to update these values.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Currently, we're not handling any form submission.
  // The button is type="button", so it won't submit the form.
  // If we wanted to handle login, we'd typically add an onSubmit handler
  // to the <form> or an onClick handler to the <button> that sends the data
  // to the server or performs validation.

  return (
    // A container div to group the login form elements.
    // We apply inline styles here for simplicity: margin and color.
    <div style={{ margin: "20px", color: "#000" }}>
      {/* A heading to identify this section as the Login page. */}
      <h2>Login</h2>

      {/* The <form> element for structuring the input fields.
          We're giving it a maxWidth of 300px for a narrower layout. */}
      <form style={{ maxWidth: "300px" }}>
        
        {/* First field group for Email */}
        <div style={{ marginBottom: "10px" }}>
          {/* The label for the email input, connected by the htmlFor attribute. */}
          <label htmlFor="email">Email:</label>
          <br />
          {/* The actual input for the email.
              - type="email" ensures the browser may provide email-specific input features.
              - placeholder is just a hint to the user.
              - value is bound to our 'email' state variable.
              - onChange updates the state with whatever the user types.
              - style is set to make it 100% width of the parent container. */}
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        
        {/* Second field group for Password */}
        <div style={{ marginBottom: "10px" }}>
          {/* The label for the password input, connected by the htmlFor attribute. */}
          <label htmlFor="password">Password:</label>
          <br />
          {/* The actual input for the password.
              - type="password" hides the characters as they are typed.
              - placeholder is just a hint to the user.
              - value is bound to our 'password' state variable.
              - onChange updates the state with whatever the user types.
              - style is set to make it 100% width of the parent container. */}
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        
        {/* This button doesn't do anything yet, as we set type="button"
            (so it won't trigger form submission).
            You can add an onClick handler or change the form onSubmit behavior later. */}
        <button type="button" style={{ padding: "8px 16px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

// Exporting our 'Login' component so it can be imported and used in other parts of the app.
export default Login;
