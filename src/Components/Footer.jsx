import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      <img src="./logo.png" alt="Metflix" />
      <div className="social--icons">
        <a onClick={(e) => e.preventDefault()} href="#">
          <FaGithub className="icon" color="#cccccc" />
        </a>
        <a onClick={(e) => e.preventDefault()} href="#">
          <FaLinkedin className="icon" color="#87cff3" />
        </a>
        <a onClick={(e) => e.preventDefault()} href="#">
          <FaInstagram className="icon" color="#f35edd" />
        </a>
      </div>
      <span>&copy; 2023 Copyright Metflix | All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
