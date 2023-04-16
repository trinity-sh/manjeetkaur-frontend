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
                <div className="absolute top-0 right-0 mt-3 md:m-3  flex">
                    <a
                        href="http://www.facebook.com/groups/ManjeetKaurFoundation"
                        className="p-2"
                    >
                        <FaFacebook className=" md:text-3xl text-blue-700 hover:text-blue-800" />
                    </a>
                    <a
                        href="http://www.instagram.com/ManjeetKaurFoundation"
                        className="p-2"
                    >
                        <FaInstagram className="md:text-3xl text-pink-400 hover:text-pink-600" />
                    </a>
                    <a
                        href="http://www.twitter.com/ManjeetKaurOrg"
                        className="p-2"
                    >
                        <FaTwitter className="md:text-3xl text-blue-400 hover:text-blue-600" />
                    </a>
                </div>
            </section>
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
