import React from "react";

function Contact() {
    return (
        <div id="contact">
            <div className="mx-auto mt-24 sm:mt-48">
                <div className="relative isolate overflow-hidden bg-pink-800 px-6 py-24 sm:rounded-tl-full sm:px-24 sm:pb-0 xl:py-24">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Give us your valuable feedback.
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Reprehenderit ad esse et non officia in nulla. Id
                        proident tempor incididunt nostrud nulla et culpa.
                    </p>
                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm sm:leading-6 placeholder:text-white"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Submit
                        </button>
                    </form>
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="3096c803-efce-4a18-a601-c2f068f9adf3"
                                width={200}
                                height={200}
                                x="50%"
                                y={-24}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg
                            x="50%"
                            y={-24}
                            className="overflow-visible fill-gray-800/20"
                        >
                            <path d="M0 0h201v201h-201Z" strokeWidth={0} />
                        </svg>
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#3096c803-efce-4a18-a601-c2f068f9adf3)"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 1108 632"
                        aria-hidden="true"
                        className="absolute -top-24 -right-80 -z-10 w-[69.25rem] transform-gpu blur-3xl"
                    >
                        <path
                            fill="url(#986f4ec8-ca62-4906-a05f-981d15a9baf5)"
                            fillOpacity=".25"
                            d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z"
                        />
                        <defs>
                            <linearGradient
                                id="986f4ec8-ca62-4906-a05f-981d15a9baf5"
                                x1="1220.59"
                                x2="-85.053"
                                y1="198.898"
                                y2="-7.05"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#F7C8E0" />
                                <stop offset={1} stopColor="#EEE9DA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Contact;
