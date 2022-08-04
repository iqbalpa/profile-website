import React from "react";

const Header = () => {
    return (
        <header className="fixed w-screen h-16 z-10 flex flex-row justify-between items-center bg-ResolutionBlue text-white">
            <a href="#" className="ml-8 text-xl font-extrabold">IQBAL</a>

            <div className="flex flex-row items-center pr-6 text-md font-semibold">
                <a href="#1" className="m-3 duration-75 hover:text-green-500">About</a>
                <a href="#2" className="m-3 duration-75 hover:text-green-500">Projects</a>
                <a href="mailto:iqbalpahlevi07@gmail.com">
                    <button className="hover:scale-105 m-3 p-2 rounded-lg border-2 border-green-500 duration-300 hover:bg-green-500 text-green-500 hover:text-ResolutionBlue">Contact Me</button>
                </a>
            </div>
        </header>
    );
}

export default Header;