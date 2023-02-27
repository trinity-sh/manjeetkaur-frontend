import React from "react";
import "./styles/navbar.css";
import "../App.css";

const Navbar = () => {
    return (
        <div className="w-full h-20 shadow-md flex items-center justify-center navbg">
            <div className="flex flex-row justify-between items-center w-full max-w-[1300px] h-full">
                <div className="group px-5 w-32 overflow-visible h-20 text-5xl badscript flex items-center duration-[300ms] hover:bg-pink-500">
                    <span className="group-hover:text-white group-hover:h-30 text-pink-500 sprosans h-full flex items-center font-bold">
                        MK
                    </span>
                    <span className="group-hover:text-white group-hover:h-30 text-black badscript h-full flex items-center">
                       f
                    </span>
                </div>

                <div className="h-full w-fit text-right mob:hidden flex items-center">
                    {[
                        "Home",
                        "About",
                        "Gallery",
                        "Apply For Aid",
                        "Contact Us",
                    ].map((i) => (
                        <div className="relative group px-4 font-semibold sprosans h-full flex flex-col justify-center items-center hover:bg-pink-500 duration-300 hover:border-b-[4px] border-b-[2px] border-pink-500">
                            <span className="group-hover:text-white duration-[200ms] group-hover:border-b-[1.5px] group-hover:relative group-hover:-translate-y-[4px]">
                                {i}
                            </span>
                            <div className="absolute left-1/2 top-[80%] text-white group-hover:visible transition -translate-x-1/2 -translate-y-1/2">
                                ⌄
                            </div>
                        </div>
                    ))}
                </div>

                <button className="mx-5 w-28 text-center font-semibold outline-none sprosans flex items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 duration-300 h-10">
                    Donate ❤
                </button>
            </div>
        </div>
    );
};

export default Navbar;
