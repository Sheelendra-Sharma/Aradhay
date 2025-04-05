import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/ptaradhay_official/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.youtube.com/@panditaradhay"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-youtube"></i>
      </a>
      <a
        href="https://www.facebook.com/@aradhay.singh.5661/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;