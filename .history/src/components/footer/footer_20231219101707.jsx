// Footer.jsx

import React from 'react';
import './footer.scss';  // Make sure to create a Footer.scss file for styling

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
          {/* Add social media icons/links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Study Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
