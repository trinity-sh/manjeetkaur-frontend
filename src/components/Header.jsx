import React from "react";
import "./styles/header.css";
import MKFLogo from "../assets/logo-highres-bubble.png";

function Header() {
    return (
        <>
            <div className="flex flex-col items-center justify-center overflow-visible">
                <div className="herobg h-[calc(100vh-400px)] flex items-center justify-center w-[100%]">
                    <img
                        className="wide:w-[30%]"
                        src={MKFLogo}
                        alt="MKF Logo"
                    />
                </div>

                <div className="z-[5] w-full max-w-[1000px] p-6 rounded-3xl bg-white absolute bottom-0 translate-y-[-4.3rem] shadow-2xl">
                    <p className="custom-font font-bold text-center text-xl text-pink-700">
                        "Service to humanity is not just a noble gesture, it is
                        the essence of our existence. Every act of kindness, no
                        matter how small, has the power to transform someone's
                        life. Let us all strive to be the change we want to see
                        in the world by serving humanity with love, compassion,
                        and dedication."
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;
