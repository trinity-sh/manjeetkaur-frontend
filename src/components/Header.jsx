import React from "react";
import SvgComponent from "./SvgComp";
import "./styles/header.css"
function Header() {
  return (
    <div>
      <div className="header">
        {/* <div className="header-text"><h2>Let's take one step towards Humanity!</h2><h2>Let's take one step towards Humanity!</h2></div> */}
      </div>
      <SvgComponent />
    </div>
  );
}

export default Header;
