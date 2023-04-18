import React from "react";
import "./styles/header.css";
import logo1 from "../assets/heroimg.jpg";
import logo2 from "../assets/newdesign11.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import MKFLogo from "../assets/logo-highres.png"

function Header() {
    return (
        <div>
            <div className="herobg h-[calc(100vh-5rem)] flex items-center justify-center">
                <img className="wide:w-[40%]" src={MKFLogo} alt="MKF Logo" />
            </div>
            <div>
                <p className="custom-font pb-20 md:pb-2 md:pt-24 font-bold text-center text-lg sm:text-2xl md:text-3xl text-pink-700">
                    "Service to humanity is not just a noble gesture, it is the
                    essence of our existence. Every act of kindness, no matter
                    how small, has the power to transform someone's life. Let us
                    all strive to be the change we want to see in the world by
                    serving humanity with love, compassion, and dedication."
                </p>
            </div>
        </div>
    );
}

export default Header;
