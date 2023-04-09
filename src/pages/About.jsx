import React from "react";

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
                                src="https://www.daysoftheyear.com/wp-content/uploads/international-day-of-charity-1.jpg"
                                alt="Company logo"
                                className="rounded-xl w-full object-cover h-full"
                            />
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed ultricies enim et risus
                                vulputate, eu tincidunt ex blandit. Sed in nunc
                                commodo, bibendum odio et, varius nisi. Vivamus
                                mollis velit nec sem blandit bibendum. Ut vel
                                dolor ullamcorper, faucibus lectus sed, auctor
                                velit. Nullam porta hendrerit lectus, vel dictum
                                nisi mollis nec.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
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
                <div className="lg:p-20 md:pt-12 md:px-12 mx-auto">
                    <div className="flex justify-between flex-col md:flex-row items-center">
                        <div className="lg:w-3/4 md:w-1/2 md:h-96 mb-4 md:mb-0 mr-4 md:mr-8">
                            <video className="rounded-xl w-full object-cover h-full">
                                <source src="movie.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed ultricies enim et risus
                                vulputate, eu tincidunt ex blandit. Sed in nunc
                                commodo, bibendum odio et, varius nisi. Vivamus
                                mollis velit nec sem blandit bibendum. Ut vel
                                dolor ullamcorper, faucibus lectus sed, auctor
                                velit. Nullam porta hendrerit lectus, vel dictum
                                nisi mollis nec.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:ml-4">
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
        </div>
    );
}

export default About;
