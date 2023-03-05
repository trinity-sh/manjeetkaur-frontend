import React from "react";
import logo1 from "../assets/logosmod11.png";
import logo2 from "../assets/newdesign11.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header() {
    return (
        <div>
            <section class="px-3 py-5 bg-white-100 lg:py-10 relative">
                <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div class="order-1 lg:order-2 w-full">
                        <img
                            class="h-100 w-full object-cover lg:w-[500px] lg:h-[500px]"
                            src={logo1}
                            alt=""
                        />
                    </div>
                </div>
                <div className="absolute top-0 mt-3 md:m-3  flex">
                    <a href="" className="p-2">
                        <FaFacebook className=" md:text-3xl text-blue-700 hover:text-blue-800" />
                    </a>
                    <a href="" className="p-2">
                        <FaInstagram className="md:text-3xl text-pink-400 hover:text-pink-600" />
                    </a>
                    <a href="" className="p-2">
                        <FaTwitter className="md:text-3xl text-blue-400 hover:text-blue-600" />
                    </a>
                </div>
            </section>
            <div>
                <p className="custom-font pb-20 md:pb-2 md:pt-24 font-bold text-center text-lg sm:text-2xl md:text-3xl text-pink-700">
                    Laboris ullamco consectetur aliqua sit dolore nostrud quis.
                </p>
            </div>
        </div>
    );
}

export default Header;
