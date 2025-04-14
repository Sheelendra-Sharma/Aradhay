import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>😊 Pandit Aradhay</h2>
          <p>Kathak Dancer And TV Actor</p>
        </div>

        <div className="footer-sections">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#gallary">Gallary</a>
            <a href="#about">About</a>
            <a href="#ContactUs">Contact</a>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <a href="https://www.facebook.com/@aradhay.singh.5661/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/ptaradhay_official/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@panditaradhay">Youtube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Pandit Aradhay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
