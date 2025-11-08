import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./Auth.css";
import { useState } from "react";

export default function Login() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA before continuing!");
      return;
    }
    // continue login process
    console.log("Login submitted");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-brand">🛍️ ShopSphere</div>

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Sign in to access your world</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />

          {/* CAPTCHA */}
          <div className="captcha-container">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // replace this with your real key
              onChange={handleCaptchaChange}
            />
          </div>

          <button className="auth-btn">Continue</button>
        </form>

        <div className="auth-links">
          <Link to="/forgot" className="auth-link">Forgot password?</Link>
          <p className="auth-foot">
            New here?{" "}
            <Link to="/signup" className="auth-link-strong">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
