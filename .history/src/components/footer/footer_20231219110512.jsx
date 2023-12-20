// Footer.jsx

import React from 'react';
import './footer.scss'; // Make sure to create a Footer.scss file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality educational content for students.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media:</p>
          {/* Social media icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Study Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
