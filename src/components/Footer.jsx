const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Gallery", href: "/#gallery" },
        { name: "Apply for Aid", href: "#aid" },
        { name: "Donate", href: "/donate" },
    ],
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/groups/ManjeetKaurFoundation",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/ManjeetKaurFoundation/",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "https://twitter.com/ManjeetKaurOrg",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
    ],
};

export default function Footer() {
    const date = new Date();
    return (
        <footer className="bg-pink-800">
            {/* <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a
                                href={item.href}
                                className="text-md leading-6 text-white hover:font-bold hover:text-gray-800"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-gray-800"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm leading-5 text-gray-200">
                    &copy; {date.getFullYear()} Your Company, Inc. All rights
                    reserved.
                </p>
            </div> */}

            <div>
                <div className="mx-auto">
                    <div className="relative isolate overflow-hidden px-6 py-24">
                        <div className="mx-auto overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                            <nav
                                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                                aria-label="Footer"
                            >
                                {navigation.main.map((item) => (
                                    <div key={item.name} className="pb-6">
                                        <a
                                            href={item.href}
                                            className="text-md leading-6 text-white hover:font-bold hover:text-gray-800"
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                ))}
                            </nav>
                            <div className="mt-10 flex justify-center space-x-10">
                                {navigation.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:text-gray-800"
                                    >
                                        <span className="sr-only">
                                            {item.name}
                                        </span>
                                        <item.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                ))}
                            </div>
                            <p className="mt-10 text-center text-sm leading-5 text-gray-200">
                                &copy; {date.getFullYear()} Manjeet Kaur Foundation.
                                All rights reserved.
                            </p>
                        </div>
                        <svg
                            className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_bottom_right,white,transparent)]"
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
                            className="absolute -top-50 -right-50 -z-10 w-[69.25rem] transform-gpu blur-3xl"
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
                                    <stop stopColor="#4F46E5" />
                                    <stop offset={1} stopColor="#80CAFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
