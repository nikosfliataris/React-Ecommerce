import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <h5>
        &copy; {new Date().getFullYear()}/{new Date().getMonth() + 1}/
        {new Date().getDate()}
        <span> Comfy Sloth</span>
      </h5>
      <h5>All rights reserverd</h5>
    </footer>
  );
}

export default Footer;
