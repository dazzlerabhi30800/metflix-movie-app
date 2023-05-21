import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      <img src="./logo.png" alt="Metflix" />
      <div className="social--icons">
        <a href="#">
          <FaGithub className="icon" color="#cccccc" />
        </a>
        <a href="#">
          <FaLinkedin className="icon" color="#87cff3" />
        </a>
        <a href="#">
          <FaInstagram className="icon" color="#f35edd" />
        </a>
      </div>
      <span>&copy; 2023 Copyright Metflix | All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
