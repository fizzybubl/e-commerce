import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <a href="https://github.com/dragosdaniil" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dragoș-daniil-săndică-9a44351ba/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
