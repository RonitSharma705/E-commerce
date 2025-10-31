import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-brand">
          🛍️ ShopSphere
        </div>

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Sign in to access your world</p>

        <form className="auth-form">
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />

          <button className="auth-btn">Continue</button>
        </form>

        <div className="auth-links">
          <Link to="/forgot" className="auth-link">Forgot password?</Link>
          <p className="auth-foot">
            New here? <Link to="/signup" className="auth-link-strong">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
