import React, { useEffect, useState } from "react";
import "../App.css";
import { AiOutlineMenu } from "react-icons/ai";
import {
    FavoriteBorderOutlined,
    HandshakeOutlined,
    HealthAndSafetyOutlined,
    HomeOutlined,
    MailOutlineOutlined,
    PeopleAltOutlined,
    VolunteerActivismOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
    FaDonate,
    FaFacebook,
    FaHandsHelping,
    FaInfoCircle,
    FaInstagram,
    FaMailBulk,
    FaSearch,
    FaTwitter,
} from "react-icons/fa";
import MKFLogo from "../assets/logo-highres.png";
import MKFLogoBubble from "../assets/logo-highres-bubble.png";
import Marquee from "react-fast-marquee";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const mobDropdownHeight = "600px";

    useEffect(() => {
        const ddown = document.getElementById("mob-drop-down");

        ddown.style.transitionProperty = "all";
        ddown.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
        ddown.style.transitionDuration = "450ms";
        ddown.style.top = "-" + mobDropdownHeight;

        var timer = null;
        const navScrollEvent = () => {
            if (timer !== null) clearTimeout(timer);

            timer = setTimeout(function () {
                const leadingNav = document.getElementById("leading-navbar");
                leadingNav.style.transitionDuration = "500ms";
                leadingNav.style.transitionTimingFunction = "ease-in-out";

                if (window.scrollY > 10 && window.innerWidth >= 1024) {
                    leadingNav.style.top = "-188px";
                } else if (window.scrollY < 263 && window.innerWidth >= 1024) {
                    leadingNav.style.top = "0px";
                }
            }, 10);
        };

        navScrollEvent();
        window.addEventListener("scroll", navScrollEvent);
    }, []);

    useEffect(() => {
        const hburg = document.getElementById("hamburger");
        const ddown = document.getElementById("mob-drop-down");

        if (!open) {
            ddown.style.top = "-" + mobDropdownHeight;
            hburg.style.backgroundColor = "white";
        } else {
            ddown.style.top = "5rem";
            hburg.style.backgroundColor = "#e9e9e9";
        }
    }, [open]);

    const navlinks = [
        ["Home", "/", <HomeOutlined />],
        ["About Us", "/about", <PeopleAltOutlined />],
        ["Our Work", "/work", <HandshakeOutlined />],
        ["Donate", "/donate", <FavoriteBorderOutlined />],
        ["Contact Us", "/#contact-us-footer", <MailOutlineOutlined />],
        [
            "Apply to Volunteer",
            "https://forms.gle/o3YhJuMiG78xdqfw9",
            <VolunteerActivismOutlined />,
        ],
        [
            "Apply for Aid",
            "https://forms.gle/jZiDJM8xmbsiLEa37",
            <HealthAndSafetyOutlined />,
        ],
    ];

    return (
        <>
            <div
                id="leading-navbar"
                className="bg-gray-900 flex flex-col w-full items-center z-50 fixed mob:top-0"
            >
                <div className="mob:hidden w-full h-full max-w-[1300px] flex flex-row">
                    <div className="w-full h-[38px] flex items-center justify-between">
                        <div className="space-x-6 w-72 h-fit flex flex-row justify-center">
                            <span className="hover:underline hover:text-gray-400 cursor-pointer text-gray-500 font-bold text-sm">
                                <a href="/donate">DONATE</a>
                            </span>

                            <span className="hover:underline hover:text-gray-400 cursor-pointer text-gray-500 font-bold text-sm">
                                <a href="https://forms.gle/jZiDJM8xmbsiLEa37">
                                    VOLUNTEER
                                </a>
                            </span>

                            <span className="hover:underline hover:text-gray-400 cursor-pointer text-gray-500 font-bold text-sm">
                                <a href="https://forms.gle/o3YhJuMiG78xdqfw9">
                                    APPLY FOR AID
                                </a>
                            </span>
                        </div>

                        <div className="flex flex-row space-x-2 h-[60%]">
                            <input
                                placeholder="Google Search site:manjeet.org"
                                id="google-search"
                                type="text"
                                className="w-96 outline-none h-full rounded-md px-2 border-gray-600 border sprosans text-gray-400 text-xs bg-gray-800"
                            />
                            <button
                                type="submit"
                                className="outline-none flex flex-row items-center text-white text-xs bg-pink-700 hover:bg-pink-800 transition duration-150 rounded-md shadow-sm px-2"
                                onClick={() => {
                                    const gsearch =
                                        document.getElementById(
                                            "google-search"
                                        );
                                    window.location.href =
                                        "https://google.com/search?q=" +
                                        encodeURIComponent(
                                            "site:manjeet.org "
                                        ) +
                                        encodeURIComponent(gsearch.value);
                                }}
                            >
                                <FaSearch size={10} />
                                &nbsp;Search
                            </button>
                        </div>

                        <div className="space-x-1 flex w-72 justify-end">
                            <a
                                href="http://www.facebook.com/groups/ManjeetKaurFoundation"
                                className="group p-2 text-gray-300 text-xs font-light flex flex-row space-x-1 items-center"
                            >
                                <span className="w-0 overflow-hidden group-hover:w-[7.5rem] transition-all duration-[800ms]">
                                    ManjeetKaurFoundation
                                </span>
                                <FaFacebook className="text-lg text-blue-700 hover:text-blue-800" />
                            </a>
                            <a
                                href="http://www.instagram.com/ManjeetKaurFoundation"
                                className="group p-2 text-gray-300 text-xs font-light flex flex-row space-x-1 items-center"
                            >
                                <span className="w-0 overflow-hidden group-hover:w-[8rem] transition-all duration-[800ms]">
                                    @ManjeetKaurFoundation
                                </span>
                                <FaInstagram className="text-lg text-pink-400 hover:text-pink-600" />
                            </a>
                            <a
                                href="http://www.twitter.com/ManjeetKaurOrg"
                                className="group p-2 text-gray-300 text-xs font-light flex flex-row space-x-1 items-center"
                            >
                                <span className="w-0 overflow-hidden group-hover:w-[5.8rem] text-right transition-all duration-[800ms]">
                                    @ManjeetKaurOrg
                                </span>
                                <FaTwitter className="text-lg text-blue-400 hover:text-blue-600" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mob:hidden bg-white w-full h-[150px] z-20 flex justify-center px-5">
                    <div className="w-full max-w-[1300px] h-40 flex items-center justify-between">
                        <img
                            className="wide:h-[70%]"
                            src={MKFLogo}
                            alt="MKF Logo"
                        />

                        <a
                            href="mailto:mkf@manjeet.org"
                            className="p-3 flex flex-row h-[50%] items-center rounded-lg hover:bg-pink-100 transition duration-[300ms] cursor-pointer"
                        >
                            <FaMailBulk
                                size={40}
                                className="mr-3"
                                color="#d63767"
                            />
                            <div className="flex flex-col justify-center">
                                <div className="mb-1 text-pink-600 font-extrabold border-b border-pink-600 sprosans h-full">
                                    EMAIL US
                                </div>
                                <div className="text-gray-600 font-light text-sm">
                                    mkf@manjeet.org
                                </div>
                            </div>
                        </a>

                        <div
                            onClick={() => navigate("/donate")}
                            className="p-3 flex flex-row h-[50%] items-center rounded-lg hover:bg-pink-100 transition duration-[300ms] cursor-pointer"
                        >
                            <FaDonate
                                size={40}
                                className="mr-3"
                                color="#d63767"
                            />
                            <div className="flex flex-col justify-center">
                                <div className="mb-1 text-pink-600 font-extrabold border-b border-pink-600 sprosans h-full">
                                    MAKE A DONATION
                                </div>
                                <div className="text-gray-600 font-light text-sm">
                                    Support our work with 1-time
                                    <br />
                                    or recurring donations
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => navigate("/work")}
                            className="p-3 flex flex-row h-[50%] items-center rounded-lg hover:bg-pink-100 transition duration-[300ms] cursor-pointer"
                        >
                            <FaInfoCircle
                                size={40}
                                className="mr-3"
                                color="#d63767"
                            />
                            <div className="flex flex-col justify-center">
                                <div className="mb-1 text-pink-600 font-extrabold border-b border-pink-600 sprosans h-full">
                                    KNOW MORE
                                </div>
                                <div className="text-gray-600 font-light text-sm">
                                    Learn more about the work
                                    <br />
                                    that we do
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd5tOx0tLuqbsLVEVOkOvfCcKJHkaOpqSu8XgE_L5O5LpfWPg"
                            className="p-3 flex flex-row h-[50%] items-center rounded-lg hover:bg-pink-100 transition duration-[300ms] cursor-pointer"
                        >
                            <FaHandsHelping
                                size={40}
                                className="mr-3"
                                color="#d63767"
                            />
                            <div className="flex flex-col justify-center">
                                <div className="mb-1 text-pink-600 font-extrabold border-b border-pink-600 sprosans h-full">
                                    APPLY FOR AID
                                </div>
                                <div className="text-gray-600 font-light text-sm">
                                    Know someone we could reach
                                    <br />
                                    out to? Let us know!
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-full h-20 shadow-md flex items-center justify-center navbg bg-pink-600 z-20">
                    <div className="flex flex-row justify-between items-center w-full max-w-[1300px] h-full">
                        <div
                            onClick={() => navigate("/")}
                            className="cursor-pointer flex flex-row group h-full wide:w-28"
                        >
                            <span
                                id="nav-manjeet-site"
                                className="mob:hidden px-3 transition-all duration-300 group-hover:text-pink-600 group-hover:bg-white text-white group-hover:h-30 sprosans h-full flex items-center text-2xl"
                            >
                                <span>
                                    <span className="font-extrabold">
                                        manjeet
                                    </span>
                                    .org
                                </span>
                            </span>
                            <img
                                id="nav-manjeet-logo"
                                src={MKFLogoBubble}
                                alt="MKF Logo"
                                className="wide:hidden px-4 py-3 h-[100%] transition duration-300 group-hover:bg-white"
                            />
                        </div>

                        <div className="h-full w-fit text-right mob:hidden flex items-center">
                            {navlinks.map((i) => (
                                <div
                                    onClick={() => {
                                        if (
                                            i[1].substring(0, 8) === "https://"
                                        ) {
                                            window.location.href = i[1];
                                        } else {
                                            return navigate(`${i[1]}`);
                                        }
                                    }}
                                    className="cursor-pointer relative group px-4 font-semibold sprosans h-full flex flex-col justify-center items-center hover:bg-white duration-300 hover:border-b-[4px] border-b-[2px] border-white"
                                >
                                    <span className="text-white group-hover:text-pink-600 duration-[200ms] group-hover:border-b-[1.5px] border-pink-600 group-hover:relative group-hover:-translate-y-[4px]">
                                        {i[0]}
                                    </span>
                                    <div className="absolute group-hover:text-pink-600 left-1/2 top-[80%] text-white group-hover:visible transition -translate-x-1/2 -translate-y-1/2">
                                        ⌄
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="wide:hidden flex-grow" />

                        <button
                            className="mx-5 w-28 text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 duration-300 h-10"
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
                    className="z-10 bg-white fixed w-full shadow-xl flex flex-col items-center wide:hidden"
                >
                    <div className="flex flex-row space-x-2 bg-gray-900 w-full h-14 p-3 justify-center">
                        <input
                            placeholder="Google Search site:manjeet.org"
                            id="google-search"
                            type="text"
                            className="flex-grow outline-none h-full rounded-md px-2 border-gray-600 border sprosans text-gray-400 text-xs bg-gray-800"
                        />
                        <button
                            type="submit"
                            className="outline-none flex flex-row items-center text-white text-xs bg-pink-700 hover:bg-pink-800 transition duration-150 rounded-md shadow-sm px-2"
                            onClick={() => {
                                const gsearch =
                                    document.getElementById("google-search");
                                window.location.href =
                                    "https://google.com/search?q=" +
                                    encodeURIComponent("site:manjeet.org ") +
                                    encodeURIComponent(gsearch.value);
                            }}
                        >
                            <FaSearch size={10} />
                            &nbsp;Search
                        </button>
                    </div>

                    {navlinks.map((i) => (
                        <div
                            onClick={() => {
                                setOpen(false);
                                if (i[1].substring(0, 8) === "https://") {
                                    window.location.href = i[1];
                                } else {
                                    return navigate(`${i[1]}`);
                                }
                            }}
                            className="w-[90%] py-5 sprosans font-semibold text-center border-b border-gray-200 cursor-pointer transition duration-300 hover:bg-gray-200"
                        >
                            {i[2]} {i[0]}
                        </div>
                    ))}

                    <div className="m-3 space-x-3 flex">
                        <a
                            href="https://www.facebook.com/groups/ManjeetKaurFoundation"
                            className="p-2"
                        >
                            <FaFacebook className="text-4xl text-blue-700 hover:text-blue-800" />
                        </a>
                        <a
                            href="https://www.instagram.com/ManjeetKaurFoundation"
                            className="p-2"
                        >
                            <FaInstagram className="text-4xl text-pink-400 hover:text-pink-600" />
                        </a>
                        <a
                            href="https://www.twitter.com/ManjeetKaurOrg"
                            className="p-2"
                        >
                            <FaTwitter className="text-4xl text-blue-400 hover:text-blue-600" />
                        </a>
                    </div>

                    <div className="text-[10px] text-center m-3 mx-10">
                        <b>
                            <a href="https://manjeet.org">manjeet.org</a>
                        </b>{" "}
                        is a registered trademark of{" "}
                        <b>Manjeet Kaur Foundation</b>, a non-profit
                        organisation.
                    </div>
                </div>

                <div
                    id="urgent-headline"
                    className="w-full h-[2.2rem] shadow-md flex items-center justify-center text-xs relative"
                >
                    <Marquee className="h-auto w-auto">
                        <div className="w-40" />
                        <span className="sprosans font-bold w-fit mob:block text-gray-400">
                            Help Us Fight&nbsp;
                        </span>
                        <span className="sprosans text-pink-600 font-bold bg-opacity-60 w-fit">
                            <span className="text-yellow-400">Summer</span>{" "}
                            Hunger
                        </span>
                        <span className="sprosans w-fit mob:block text-gray-400">
                            !&nbsp;
                        </span>
                        <span
                            onClick={() => navigate("/donate")}
                            className="hover:text-gray-300 hover:cursor-pointer hover:underline sprosans w-fit mob:block text-gray-400 whitespace-nowrap font-medium"
                        >
                            Many children rely on free or reduced-price school
                            meals to access nutritious food during the year.
                            With your support, we can make a difference and
                            ensure that no child goes hungry this summer.{" "}
                            <b>Donate now!</b>
                        </span>
                    </Marquee>
                    <div
                        onClick={() => {
                            const item =
                                document.getElementById("urgent-headline");
                            item.style.display = "none";
                        }}
                        className="flex hover:bg-gray-800 hover:cursor-pointer justify-center items-center h-full absolute right-0 z-[5] text-white font-black bg-gray-700 w-[2.2rem]"
                    >
                        <span className="text-base">⨯</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
