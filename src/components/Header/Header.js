import React from "react";

const Header = () => {
    return (
        <header className="fixed w-screen h-16 z-10 flex flex-row justify-between items-center bg-ResolutionBlue text-white">
            <a href="#" className="ml-8 text-xl font-extrabold">IQBAL</a>

            <div className="flex flex-row items-center pr-6 text-md font-semibold">
                <a href="#" className="m-3 hover:text-green-500">About</a>
                <a href="#" className="m-3 hover:text-green-500">Projects</a>
                <button className="m-3 p-2 rounded-lg border-2 border-green-500 duration-300 hover:bg-green-500 text-green-500 hover:text-ResolutionBlue">Contact Me</button>
            </div>
        </header>
    );
}

export default Header;