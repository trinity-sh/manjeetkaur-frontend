import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logosmod12.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header() {
    return (
        <div>
            <section class="px-3 py-5 bg-neutral-100 lg:py-10">
                <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
                        <p class="text-xl font-bold md:text-1xl">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/groups/ManjeetKaurFoundation"
                                class="mb-4"
                            >
                                <button className="text-white px-4 py-2 rounded-md">
                                    <FaFacebook className="inline-block mr-2 text-blue-600" />
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-4 flex items-center justify-center">
                                    ManjeetKaurFoundation
                                </button>
                            </a>{" "}
                            <br />
                            <a
                                target="_blank"
                                href="https://www.instagram.com/ManjeetKaurFoundation"
                                class="mb-4"
                            >
                                <button className="text-white px-4 py-2 rounded-md">
                                    <FaInstagram className="inline-block mr-2 text-pink-500" />
                                </button>
                                <button className="bg-pink-500 hover:bg-pink-600 rounded-full text-white font-bold py-2 px-4 flex items-center justify-center">
                                    @ManjeetKaurFoundation
                                </button>
                            </a>
                            <br />
                            <a
                                target="_blank"
                                href="https://www.twitter.com/ManjeetKaurOrg"
                                class="mb-4"
                            >
                                <button className="text-white px-4 py-2 rounded-md">
                                    <FaTwitter className="inline-block mr-2 text-blue-400" />
                                </button>
                                <button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 flex items-center justify-center">
                                    #MANJEETKAURORG
                                </button>
                            </a>
                        </p>
                    </div>
                    <div class="order-1 lg:order-2">
                        <img
                            class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                            src={logo1}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <div className=" bg-pink-500 overflow-hidden shadow-lg backdrop-filter backdrop-blur-md">
                <div className="p-4">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Welcome to MANJEET KAUR FOUNDATION
                    </h2>{" "}
                    <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ultricies enim et risus vulputate, eu tincidunt ex
                        blandit.
                    </p>
                </div>
            </div> 
        </div>
    );
}

export default Header;
