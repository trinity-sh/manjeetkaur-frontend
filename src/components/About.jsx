import React from "react";
import founder from "../assets/work/founder.jpeg";
import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();

    return (
        <div
            id="about"
            className="w-full justify-center items-center flex self-center justify-self-center"
        >
            {/* <div className="flex flex-col items-center justify-center px-7">
                <div className="lg:p-20 md:pt-24 md:px-12 mx-auto">
                    <div className="flex justify-between flex-col md:flex-row items-center">
                        <div className="lg:w-3/4 md:w-1/2 md:h-96 mb-4 md:mb-0 mr-4 md:mr-8">
                            <img
                                src={founder}
                                alt="Company logo"
                                className="rounded-xl w-full object-contain h-full"
                            />
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-5xl text-pink-600 font-black">About Us</p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                The Manjeet Kaur Foundation is an 80(g)
                                registered organistion. The Foundation bears the
                                name of Late Manjeet Kaur (mother of Guru Singh,
                                Founder of the foundation), an epitome of
                                caring, love and kindess.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                The organistion is dedicated to serving the
                                needy and provide assistance to individuals who
                                are facing various challenges such as poverty,
                                illness, and lack of education. <br />
                                The foundation offers a wide range of services
                                that are aimed at addressing the needs of the
                                less fortunate members of the society.
                            </p>
                            <a
                                href="/about"
                                className="text-base md:text-md lg:text-lg text-pink-700 mb-4 md:ml-4"
                            >
                                <button>Read More...</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="max-w-[1300px] wide:space-x-10 mob:space-y-10 flex flex-row mob:flex-col-reverse wide:px-28 wide:m-16 w-full wide:rounded-2xl wide:border border-gray-300 bg-gray-100">
                <div className="flex items-center mob:px-10 mob:py-14 justify-center wide:min-w-1/2 wide:p-10">
                    <img
                        src={founder}
                        alt="manjeet kaur"
                        className="wide:h-[80%] mob:max-w-[400px] mob:w-[80%] mob:-rotate-6 wide:-rotate-12 border-white border-[20px] shadow-lg mob:box-border"
                    />
                </div>
                <div className="min-w-1/2 mob:px-10 mob:py-5 space-y-5 flex flex-col items-center justify-center">
                    <p className="text-5xl text-pink-600 font-black self-start">
                        About Us
                    </p>
                    <p className="text-base text-gray-600">
                        The <b>Manjeet Kaur Foundation</b> is an 80(g)
                        registered organistion. The Foundation bears the name of{" "}
                        <b>
                            Late Manjeet Kaur (mother of Guru Singh, Founder of
                            the foundation)
                        </b>
                        , an epitome of caring, love and kindess.
                    </p>
                    <p className="text-base text-gray-600">
                        The organistion is dedicated to serving the needy and
                        provide assistance to individuals who are facing various
                        challenges such as poverty, illness, and lack of
                        education.
                    </p>
                    <p className="text-base text-gray-600">
                        The foundation offers a wide range of services that are
                        aimed at addressing the needs of the less fortunate
                        members of the society.
                    </p>
                    <button
                        className="monospace text-black w-36 text-center outline-none sprosans flex items-center justify-center rounded-md font-bold text-sm bg-transparent border-yellow-400 border-[1.5px] hover:bg-yellow-400 active:bg-yellow-500 duration-300 h-10 self-start"
                        onClick={() => navigate("/about")}
                    >
                        Learn more...
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
