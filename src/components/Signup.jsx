import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    console.log("Signup Info:", { name, email, password });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-brand">🛍️ ShopSphere</div>

        <h2 className="auth-title">Create account</h2>
        <p className="auth-sub">Join the experience</p>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">Sign up</button>
        </form>

        <p className="auth-foot">
          Already have an account?  
          <Link to="/login" className="auth-link-strong">Login</Link>
        </p>
      </div>
    </div>
  );
}
