import React, { useEffect, useState } from "react";
import "../App.css";
import Logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import {
    FavoriteBorderOutlined,
    HandshakeOutlined,
    HomeOutlined,
    MailOutlineOutlined,
    PeopleAltOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import MKFLogo from "../assets/logo-highres.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const ddown = document.getElementById("mob-drop-down");
        
        ddown.style.transitionProperty = "all";
        ddown.style.transitionTimingFunction =
        "cubic-bezier(0.4, 0, 0.2, 1)";
        ddown.style.transitionDuration = "450ms";
        ddown.style.top = '-450px';
    }, []);
    
    useEffect(() => {
        const hburg = document.getElementById("hamburger");
        const ddown = document.getElementById("mob-drop-down");

        if (!open) {
            ddown.style.top = "-450px";
            hburg.style.backgroundColor = 'white';
        } else {
            ddown.style.top = "5rem";
            hburg.style.backgroundColor = '#e9e9e9'; 
        }
    }, [open]);

    const navlinks = [
        ["Home", "/", <HomeOutlined />],
        ["About Us", "/about", <PeopleAltOutlined />],
        ["Work", "/work", <HandshakeOutlined />],
        ["Donate", "/donate", <FavoriteBorderOutlined />],
        ["Contact Us", "/#contact-us", <MailOutlineOutlined />],
    ];

    return (
        <div className="flex flex-col w-full">
            <div className="w-full h-30 z-20 flex justify-center">
                <div className="w-full max-w-[1300px] h-40 flex items-center">
                    <img className="wide:h-[70%]" src={MKFLogo} alt="MKF Logo" />
                </div>
            </div>

            <div className="w-full h-20 shadow-md flex items-center justify-center navbg sticky top-0 bg-white z-20">
                <div className="flex flex-row justify-between items-center w-full max-w-[1300px] h-full">
                    <a
                        href="/"
                        className="group px-5 w-56 overflow-visible h-20 text-5xl badscript flex items-center duration-[300ms]"
                    >
                    </a>
                    <div className="h-full w-fit text-right mob:hidden flex items-center">
                    {navlinks.map((i) =>
                        <div onClick={() => navigate(`${i[1]}`)} className="cursor-pointer relative group px-4 font-semibold sprosans h-full flex flex-col justify-center items-center hover:bg-pink-500 duration-300 hover:border-b-[4px] border-b-[2px] border-pink-500">
                            <span className="group-hover:text-white duration-[200ms] group-hover:border-b-[1.5px] group-hover:relative group-hover:-translate-y-[4px]">
                                {i[0]}
                            </span>
                            <div className="absolute left-1/2 top-[80%] text-white group-hover:visible transition -translate-x-1/2 -translate-y-1/2">
                                ⌄
                            </div>
                        </div>)}
                    </div>

                    <div className="wide:hidden flex-grow" />

                    <button
                        className="mx-5 w-28 text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 duration-300 h-10"
                        onClick={() => (window.location.href = "/donate")}
                    >
                        Donate ❤
                    </button>

                    <button
                        id="hamburger"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen((prevState) => !prevState);
                        }}
                        className="px-3 border-gray-200 border wide:hidden mr-5 w-auto text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md duration-300 h-10"
                    >
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>

            <div
                id="mob-drop-down"
                className="z-10 bg-white fixed w-full border shadow-xl flex flex-col items-center"
            >
                {navlinks.map((i) => (
                    <div
                        onClick={() => {
                            setOpen(false);
                            navigate(`${i[1]}`);
                        }}
                        className="w-[90%] py-5 sprosans font-semibold text-center border-b border-gray-200 cursor-pointer transition duration-300 hover:bg-gray-200"
                    >
                        {i[2]} {i[0]}
                    </div>
                ))}

                <div className="m-3 space-x-3 flex">
                    <a
                        href="http://www.facebook.com/groups/ManjeetKaurFoundation"
                        className="p-2"
                    >
                        <FaFacebook className="text-4xl text-blue-700 hover:text-blue-800" />
                    </a>
                    <a
                        href="http://www.instagram.com/ManjeetKaurFoundation"
                        className="p-2"
                    >
                        <FaInstagram className="text-4xl text-pink-400 hover:text-pink-600" />
                    </a>
                    <a
                        href="http://www.twitter.com/ManjeetKaurOrg"
                        className="p-2"
                    >
                        <FaTwitter className="text-4xl text-blue-400 hover:text-blue-600" />
                    </a>
                </div>

                <div className="text-[10px] text-center m-3 mx-10">
                    <b><a href="https://manjeet.org">manjeet.org</a></b> is a registered trademark of <b>Manjeet Kaur Foundation</b>, a non-profit organisation.
                </div>
            </div>
        </div>
    );
};

export default Navbar;
