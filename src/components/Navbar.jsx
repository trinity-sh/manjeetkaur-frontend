import React from "react";
import "./styles/navbar.css";
import MKF from "../assets/mkf-favicon3.png";

const Navbar = () => {
    return (
        <div className="w-full h-20 shadow-md flex items-center justify-center">
            <div className="flex flex-row justify-between items-center w-full max-w-[1300px] px-2 h-full">
                <div className="group px-3 overflow-visible h-20 font-bold text-5xl sprosans flex items-center duration-[300ms] hover:bg-pink-500">
                    <span className="group-hover:text-white group-hover:h-30 text-pink-500 sprosans h-full flex items-center">MK</span>F
                </div>

                <div className="h-full w-fit text-right mob:hidden flex items-center">
                    {[
                        "Home",
                        "Mission",
                        "Gallery",
                        "Volunteer",
                        "Blogs",
                        "Partners & Sponsors",
                        "FAQ",
                        "Contact Us",
                    ].map((i) => (
                        <div className="group px-4 font-semibold sprosans h-full flex items-center hover:bg-pink-500 duration-300">
                            <span className="group-hover:text-white duration-[0ms] group-hover:border-b-[1.5px]">{i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
