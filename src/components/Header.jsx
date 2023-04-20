import React from "react";
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

function Header() {
    /*
     * @warning: All slider image items must be of 848 x 523 (constant height) resolution for a consistent viewing experinece
     *       across devices of all width
     * */
    const slides = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

    return (
        <>
            <div className="flex flex-col items-center justify-center overflow-visible mob:mb-44 relative">
                <div
                    id="carousel-cont"
                    className="h-[calc(100vh-400px)] mob:h-[calc(100vh-5rem)] flex items-center justify-center w-[100%] relative"
                >
                    <Carousel
                        className="h-full z-0"
                        showIndicators={false}
                        showStatus={false}
                        showArrows={false}
                        transitionTime={2000}
                        centerMode
                        centerSlidePercentage={100}
                        infiniteLoop
                        autoPlay
                        stopOnHover={false}
                        emulateTouch={false}
                        showThumbs={false}
                        swipeable
                        interval={5000}
                    >
                        {slides.map((i) => (
                            <div className="h-[calc(100vh-400px)] mob:h-[calc(100vh-5rem)] overflow-hidden">
                                <img
                                    className="min-h-full object-cover"
                                    src={i}
                                    alt={i.length}
                                />
                            </div>
                        ))}
                    </Carousel>
                    <div className="absolute h-full w-full top-0 left-0 wide:shadow-inset-t" />
                    <div className="wide:hidden absolute flex items-center justify-center h-full w-full top-0 left-0">
                        <img
                            className="w-[70%] trans-png-dropshadow"
                            src={MKFLogo}
                            alt="MKF Logo"
                        />
                    </div>
                </div>

                <div className="z-[5] rounded-lg mx-8 max-w-[900px] p-6 bg-white absolute bottom-0 translate-y-1/2  shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <p className="custom-font font-bold text-center text-xl text-pink-700">
                        "Charity is the recognition of the fact that we have
                        more in common with those who are different from us than
                        those who are similar."
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;
