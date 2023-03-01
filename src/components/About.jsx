import React from "react";

function About() {
    return (
        <div id="about">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl mb-8 font-semibold leading-8 tracking-tight text-pink-600">
                        About Us
                    </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <img
                                src="https://www.daysoftheyear.com/wp-content/uploads/international-day-of-charity-1.jpg"
                                alt="Company logo"
                                className="rounded-xl w-80 h-96 object-cover object-center"
                            />
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-lg text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed ultricies enim et risus
                                vulputate, eu tincidunt ex blandit. Sed in nunc
                                commodo, bibendum odio et, varius nisi. Vivamus
                                mollis velit nec sem blandit bibendum. Ut vel
                                dolor ullamcorper, faucibus lectus sed, auctor
                                velit. Nullam porta hendrerit lectus, vel dictum
                                nisi mollis nec.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Sed rutrum vestibulum ante, vel aliquet magna
                                fermentum ut. Sed lacinia turpis ut mauris
                                dapibus aliquam. Aenean vel sapien enim. Nullam
                                sit amet magna sem. Donec tristique enim vel
                                nunc dictum, ac elementum quam consectetur.
                                Integer eget semper mi, nec fringilla nulla.
                                Donec euismod enim sit amet orci pharetra, ut
                                sagittis quam sagittis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className=" bg-pink-500 overflow-hidden shadow-lg backdrop-filter backdrop-blur-md">
                <div className="p-4">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Our Impact
                    </h2>{" "}
                    <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ultricies enim et risus vulputate, eu tincidunt ex
                        blandit.
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default About;
