import React from "react";
import "./styles/topbar.css";
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Navbar2 = () => {
  return (
    <div className="navbar2-container">
      <div className="social-handles">
        <a target="_blank" href="http://instagram.com/ManjeetKaurFoundation">
          <BsInstagram className="social-icons" />
        </a>
        <a target="_blank" href="http://www.facebook.com/groups/manjeetkaurfoundation">
          {" "}
          <BsFacebook className="social-icons" />
        </a>
        <a target="_blank" href="http://www.twitter.com/ManjeetKaurOrg">
          {" "}
          <BsTwitter className="social-icons" />
        </a>
      </div>
    </div>
  );
};

export default Navbar2;