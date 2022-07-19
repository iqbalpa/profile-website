import React from "react";

const Header = () => {
    return (
        <header className="h-16 flex flex-row justify-between items-center bg-Sapphire text-white">
            <a href="#" className="ml-8 text-xl font-extrabold">IQBAL</a>

            {/* <div className="flex flex-row">
                <a href="https://github.com/iqbalpa" target="_blank">
                    <img src="/github.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/iqbalpahlevia" target="_blank">
                    <img src="/linkedin.png" alt="LinkedIn" />
                </a>
            </div> */}

            <div className="flex flex-row items-center pr-6 text-md font-semibold">
                <a href="#" className="m-3 hover:text-green-500">About</a>
                <a href="#" className="m-3 hover:text-green-500">Projects</a>
                <button className="m-3 p-2 rounded-lg border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-Sapphire">Contact Me</button>
            </div>
        </header>
    );
}

export default Header;