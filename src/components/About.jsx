import React from "react";
import founder from "../assets/work/founder.jpeg";
function About() {
    return (
        <div id="about">
            <div className="flex flex-col items-center justify-center h-auto md:h-full px-7">
                <div className="lg:p-20 md:pt-24 md:px-12 mx-auto">
                    <h2 className="text-xl mb-8 font-semibold leading-8 tracking-tight text-pink-600">
                        About Us
                    </h2>
                    <div className="flex justify-between flex-col md:flex-row items-center">
                        <div className="lg:w-3/4 md:w-1/2 md:h-96 mb-4 md:mb-0 mr-4 md:mr-8">
                            <img
                                src={founder}
                                alt="Company logo"
                                className="rounded-xl w-full object-contain h-full"
                            />
                        </div>
                        <div className="md:w-3/4">
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
            </div>
        </div>
    );
}

export default About;
