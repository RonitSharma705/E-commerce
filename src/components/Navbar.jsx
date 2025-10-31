import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const location = useLocation();

  function handleSearch(e) {
    e.preventDefault();
    console.log("search:", query);
  }

  return (
    <header className="nav-wrap glass-nav">
      <div className="nav-left">
        <Link to="/" className="brand">
          <span className="brand-logo pulse">🛍️</span>
          <span className="brand-text">ShopSphere</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/" className="nav-link">Home</Link>

          <div className="dropdown">
            <span className="nav-link drop-btn">Products</span>
            <div className="dropdown-content">
              <Link to="/products/shoes">Shoes</Link>
              <Link to="/products/clothes">Clothes</Link>
              <Link to="/products/electronics">Electronics</Link>
              <Link to="/products/accessories">Accessories</Link>
            </div>
          </div>

          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </div>

      <div className="nav-center">
        <form className="search-form glow-search" onSubmit={handleSearch}>
          <input
            type="search"
            className="search-input neon-border"
            placeholder="Search products, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn btn-glow">
            Search
          </button>
        </form>
      </div>

      <div className="nav-right fade-in">
        <Link to="/cart" className="nav-cta">Cart 🛒</Link>

        {location.pathname !== "/login" && (
          <Link to="/login" className="btn btn-outline">Login</Link>
        )}

        {location.pathname !== "/signup" && (
          <Link to="/signup" className="btn btn-primary sparkle">Sign up</Link>
        )}
      </div>
    </header>
  );
}
