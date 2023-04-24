import React, { useEffect, useState } from "react";
import "./styles/header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MKFLogo from "../assets/logo-highres-bubble.png";
import { Carousel } from "react-responsive-carousel";
import S1 from "../assets/donation.jpg";
import S2 from "../assets/donation-2.jpg";
import S3 from "../assets/donation-3.jpg";
import S4 from "../assets/donation-4.jpg";
import S5 from "../assets/donation-5.webp";
import S6 from "../assets/donation-6.jpg";
import S7 from "../assets/donation-7.jpg";
import S8 from "../assets/donation-8.jpeg";
import S9 from "../assets/donation-9.jpeg";
import { useNavigate } from "react-router-dom";

function Header() {
    /*
     * @warning: All slider image items must be of 848 x 523 (constant height) resolution for a consistent viewing experinece
     *       across all device widths
     * */
    const slides = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(80);
    const navigate = useNavigate();

    useEffect(() => {
        const onResize = () => {
            const vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );

            if (vw < 1024) {
                setCenterSlidePercentage(100);
            } else if (vw >= 1024) {
                setCenterSlidePercentage(80);
            }
        };

        window.addEventListener("resize", () => onResize());
        onResize();
    }, []);

    return (
        <>
            <div id ="header" className="flex flex-col items-center justify-center overflow-visible relative">
                <div
                    id="carousel-cont"
                    className="h-[calc(100vh-263px)] mob:h-[calc(100vh-5rem)] flex items-center justify-center w-[100%] relative"
                >
                    <Carousel
                        className="h-full z-0"
                        showIndicators={false}
                        showStatus={false}
                        showArrows={false}
                        transitionTime={2000}
                        centerMode
                        centerSlidePercentage={centerSlidePercentage}
                        infiniteLoop
                        autoPlay
                        stopOnHover={false}
                        emulateTouch={false}
                        showThumbs={false}
                        swipeable
                        interval={5000}
                    >
                        {slides.map((i) => (
                            <div className="h-[calc(100vh-263px)] mob:h-[calc(100vh-5rem)] overflow-hidden">
                                <img
                                    className="min-h-full object-cover"
                                    src={i}
                                    alt={i.length}
                                />
                            </div>
                        ))}
                    </Carousel>
                    <div
                        id="dark-side"
                        className="transition duration-300 absolute h-full w-full top-0 left-0 wide:shadow-inset-t bg-black bg-opacity-[0.6]"
                    />
                    <div className="absolute flex flex-col items-center justify-center h-full w-full top-0 left-0">
                        <img
                            id="img-behind-urgent"
                            className="hidden wide:h-[40%] mob:w-[70%] trans-png-dropshadow self-cemter"
                            src={MKFLogo}
                            alt="MKF Logo"
                        />
                        <div
                            id="div-behind-urgent"
                            className="text-center monospace hidden my-4 text-gray-400 hover:text-white"
                        >
                            <p className="my-2 monospace text-gray-200 max-w-[80vw]m-0 p-0">
                                "Together, we can make a difference."
                            </p>
                            <u
                                className="cursor-pointer monospace"
                                onClick={() => navigate("/about")}
                            >
                                Know more
                            </u>{" "}
                            &gt;
                        </div>
                        <p
                            id="header-urgent"
                            className="transition-transform duration-1000 overflow-visible relative sprosans  text-white text-6xl mob:text-4xl max-w-[1000px] mob:mx-8 bg-black p-8 rounded-lg flex flex-col"
                        >
                            <img
                                className="wide:hidden h-[8vh] mb-5 trans-png-dropshadow self-start mob:self-center"
                                src={MKFLogo}
                                alt="MKF Logo"
                            />
                            <span className="font-bold sprosans  w-fit mob:block">
                                Help Us Fight&nbsp;
                            </span>
                            <span className="sprosans text-pink-600 font-bold bg-opacity-60 w-fit">
                                <span className="text-yellow-400">
                                    Summer
                                </span>{" "}
                                Hunger&nbsp;
                            </span>
                            <p className="sprosans text-base text-white font-light">
                                <br />
                                <b>
                                    Summer hunger is a critical issue affecting
                                    families across the country.
                                </b>{" "}
                                Many children rely on free or reduced-price
                                school meals to access nutritious food during
                                the year. But when summer arrives, these vital
                                resources disappear, leaving families struggling
                                to make ends meet.
                                <br />
                                <br />
                                <b>
                                    You can help end summer hunger by supporting
                                    our charity organization.
                                </b>{" "}
                                Your donation can provide a nutritious meal to a
                                child in need, helping them to grow, learn, and
                                thrive. With your support, we can make a
                                difference and ensure that no child goes hungry
                                this summer.{" "}
                                <b>Please consider donating today.</b> Thank you
                                for your generosity.&nbsp;&nbsp;
                                <span
                                    onClick={() => {
                                        document.getElementById(
                                            "header-urgent"
                                        ).style.display = "none";
                                        document.getElementById(
                                            "img-behind-urgent"
                                        ).style.display = "block";
                                        document.getElementById(
                                            "div-behind-urgent"
                                        ).style.display = "block";
                                    }}
                                    className="text-xs underline text-gray-400 monospace hover:text-gray-200 cursor-pointer"
                                >
                                    Dismiss
                                </span>
                            </p>
                            <div className="flex flex-row space-x-8 my-5">
                                <button
                                    className="monospace text-black w-28 text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md text-sm bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 duration-300 h-10"
                                    onClick={() => navigate("/donate")}
                                >
                                    Donate ❤
                                </button>
                                <button
                                    className="monospace text-sm w-36 text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md border-yellow-400 hover:border-yellow-600 active:border-yellow-800 border bg-transparent duration-300 h-10"
                                    onClick={() => navigate("/about")}
                                >
                                    Learn more...
                                </button>
                            </div>
                        </p>
                    </div>
                </div>

                {/* <div className="z-[5] rounded-lg mx-8 max-w-[900px] p-6 bg-white absolute bottom-0 translate-y-1/2 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <p className="custom-font font-bold text-center text-xl text-pink-700">
                        "Charity is the recognition of the fact that we have
                        more in common with those who are different from us than
                        those who are similar."
                    </p>
                </div> */}
            </div>
        </>
    );
}

export default Header;
