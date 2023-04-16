import React from "react";
import video from "../assets/mkfcare.mp4";
import founder from "../assets/work/founder.jpeg";

function About() {
    return (
        <div id="about">
            <div className="flex flex-col items-center justify-center h-auto md:h-full px-7 mb-24">
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
                                less fortunate members of the society. Some of
                                the services provided by the organization
                                include food, healthcare services, education
                                support, and vocational training. Through these
                                services, the foundation strives to empower
                                individuals and help them to achieve a better
                                quality of life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:p-20 md:pt-12 md:px-12 mx-auto">
                    <div className="flex justify-between flex-col md:flex-row items-center">
                        <div className="lg:w-3/4 md:w-1/2 md:h-96 mb-4 md:mb-0 mr-4 md:mr-8">
                            <video
                                autoPlay
                                src={video}
                                className="rounded-xl w-full object-contain h-full"
                            />
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                The foundation is run by a team of dedicated
                                volunteers who are committed to serving the
                                community. These individuals come from diverse
                                backgrounds and possess a wide range of skills
                                and expertise. 
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                They work tirelessly to ensure
                                that the foundation's programs are implemented
                                effectively and that the needs of the
                                beneficiaries are met. The organization is also
                                supported by various donors and partners who
                                share the same vision and mission of helping the
                                less fortunate members of the society. Together,
                                they work towards making a positive impact in
                                the lives of those who are in need.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
