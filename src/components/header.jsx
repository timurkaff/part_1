import React from 'react';
import './style/header.css';
import logo from "./images/logo.png"
import phone from "./images/iPhone.png"
import email from "./images/Chat.png"

function Header() {
    return (
    <header className="header">
      <div className="container">
        <nav className="Navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <div className="call_to_action">
            <div className="phone">
              <img src={phone} alt="Телефон" />
              <div>
                <p>Call us</p>
                <p>(405) 555-0128</p>
              </div>
            </div>
            <div className="email">
              <img src={email} alt="Email" />
              <div>
                <p>Talk to us</p>
                <p>hello@create com</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    );
  }
  
  export default Header;