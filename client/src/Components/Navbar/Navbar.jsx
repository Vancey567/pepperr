import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

import cart from "../../images/cart.png";
import menu from "../../images/menu.png";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className={`nav-links`}>
          <Link to="/">
            <div>About</div>
          </Link>
          <Link to="/blog">
            <div>Blog</div>
          </Link>
          <Link to="/pricing">
            <div>Pricing</div>
          </Link>
          <Link to="/careers">
            <div>Careers</div>
          </Link>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
          <Link to="/dashboard">
            <div>Dashboard</div>
          </Link>
        </div>
        <div className="right-links">
          <Link to="/cart">
            <div className="cart">
              <img src={cart} alt="cart" />
              <span className="cartName">Cart</span>
            </div>
          </Link>
          <div className="loginAndStarted">
            {/* <Button value="Login" color="transparent"/> */}
            <button className="login-btn">Login</button>
            <Button value="Get Started" color="#9D0AFF"/>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>

      <div className={`hamburger-menu ${isMenuOpen ? "open" : "close"}`}>
        <div className="hamburger-links">
          <Link to="/Login">
            <div>Login</div>
          </Link>
          <Link to="/getStarted">
            <div>Get Started</div>
          </Link>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/blog">
            <div>Blog</div>
          </Link>
          <Link to="/pricing">
            <div>Pricing</div>
          </Link>
          <Link to="/careers">
            <div>Careers</div>
          </Link>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
